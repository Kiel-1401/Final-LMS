LARAVEL - BE: (rest api)
- composer create-project laravel/laravel:^9.0 example-app
- composer require laravel/passport
-  artisan key:generate

//EDIT .env file

- php artisan migrate
- php artisan passport:install

// Make the AuthController

- php artisan serve


------------------------------------------------------------------------------------------------------------------
Incase this error may Occur: 
PHP Fatal error:  Uncaught ReflectionException: Class "App\Console\Kernel" does not exist

Try this Fix: 

1.Delete vendor and composer.lock
*********************************************************
2. Add this to your composer.json

{
    "name": "laravel/laravel",
    "type": "project",
    "require": {
        "php": "^8.1",
        "laravel/framework": "^12.0",
        "laravel/passport": "^12.4",
        "laravel/sanctum": "^4.0"
    },
    "require-dev": {
        "laravel/sail": "^1.21",
        "phpunit/phpunit": "^10.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "app/"
        }
    },
    "scripts": {
        "post-autoload-dump": [
            "@php artisan package:discover --ansi"
        ]
    }
}
*********************************************************

3. composer install
4. composer dump-autoload
5. php artisan config:clear
   php artisan cache:clear

6. php artisan key:generate
   ----------------------------------------------------------------------------------------------------------------------------

