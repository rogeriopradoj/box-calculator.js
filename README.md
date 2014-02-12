RogerioPradoJ / BoxCalculator.js
================================

Série de cálculos usados na Box / some calculations done at Box

Port of [PHP's rogeriopradoj/box-calculator](https://github.com/rogeriopradoj/box-calculator) for JavaScript.

Usage
-----

```html
    <!-- include script in your html -->
    <script src="box-calculator.js"></script>
    <!-- maybe use this tag for testing: <script src="https://raw.github.com/rogeriopradoj/box-calculator.js/master/box-calculator.js"></script> -->

    <script>
        // apf dv
        var apf           = '1234567';
        var calculatorApf = RogerioPradoJ.BoxCalculator.Apf;
        var dvApf         = calculatorApf.dvApf(apf);
        console.log("Apf: %s, Dv: %s", apf, dvApf); // should print Apf: 1234567, Dv: 05 in your browser log

    </script>
```

Package Managers
----------------

* [Composer](http://packagist.org/packages/rogeriopradoj/box-calculator.js): `rogeriopradoj/box-calculator.js`

Testing
-------

It's using [QUnit](https://qunitjs.com/) for testing.

Just open `test.html` in your browser to see the magic taking place.


License
-------
MIT

