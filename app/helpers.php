<?php

use Symfony\Component\VarDumper\VarDumper;

if (!function_exists('convert_to_percent')) {

    /**
     * @param int $number
     * @param int $max_number
     * @param int $decimal
     * @return int|string
     */
    function convert_to_percent(int $number, int $max_number, int $decimal = 2)
    {
        if ($max_number === 0) {
            return 0;
        }

        $total = (($number * 100) / $max_number) - 100;
        return number_format($total, $decimal);
    }

}

if (!function_exists('me')) {
    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    function me()
    {
        return cache()->remember('me', 60, function () {
            return auth()->user();
        });
    }
}

if (!function_exists('my_role')) {
    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    function my_role()
    {
        return cache()->remember('my_role', 60, function () {
            return auth()->user()->roles()->pluck('name')[0];
        });
    }
}

if (!function_exists('set_active')) {

    /**
     * @param $path
     * @param string $active
     * @return string
     */
    function set_active($path, $active = 'active')
    {
        return call_user_func_array('Request::is', (array)$path) ? $active : '';
    }
}

if (!function_exists('ndd')) {
    /**
     * @param mixed ...$vars
     */
    function ndd(...$vars)
    {
        foreach ($vars as $v) {
            VarDumper::dump($v);
        }
    }
}

if (!function_exists('collection_sum')) {

    /**
     * @param $payload
     * @param $field
     * @param bool $formatting
     * @param int $separator
     * @return string
     */
    function collection_sum($payload, $field, $formatting = false, $separator = 2)
    {
        if ($formatting){
            return number_format($payload->sum($field), $separator);
        }

        return $payload->sum($field);
    }
}

if (!function_exists('shorten')) {
    /**
     * @param $data
     * @param int $length
     * @param int $offset
     * @param bool $shownDelimeter
     * @param string $delimeter
     * @return false|string
     */
    function shorten($data, int $length = 25, int $offset = 0, bool $shownDelimeter = true, string $delimeter = '...')
    {
        if (strlen($data) > $length && $shownDelimeter) {
            return substr($data, $offset, $length) . "$delimeter ";
        }
        return substr($data, $offset, $length);
    }
}
