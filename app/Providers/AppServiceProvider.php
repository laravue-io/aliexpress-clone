<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Builder as DBBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::preventLazyLoading(! app()->isProduction());  // prevent N+1  on develop
        Schema::defaultStringLength(191);
        Builder::defaultStringLength(191);

        // macro for queries like  Model::whereLike('name', 'Joe')

        #WHERE
        DBBuilder::macro('whereLike', function ($attribute, string $searchTerm) {
            return $this->where($attribute, 'LIKE', "%{$searchTerm}%");
        });

        DBBuilder::macro('whereStartLike', function ($attribute, string $searchTerm) {
            return $this->where($attribute, 'LIKE', "{$searchTerm}%");
        });

        DBBuilder::macro('whereEndLike', function ($attribute, string $searchTerm) {
            return $this->where($attribute, 'LIKE', "%{$searchTerm}");
        });

        #OR WHERE

        DBBuilder::macro('orWhereLike', function ($attribute, string $searchTerm) {
            return $this->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
        });

        DBBuilder::macro('orWhereStartLike', function ($attribute, string $searchTerm) {
            return $this->orWhere($attribute, 'LIKE', "{$searchTerm}%");
        });

        DBBuilder::macro('orWhereEndLike', function ($attribute, string $searchTerm) {
            return $this->orWhere($attribute, 'LIKE', "%{$searchTerm}");
        });
    }
}
