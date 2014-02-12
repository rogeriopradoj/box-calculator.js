test('RogerioPradoJ.BoxCalculator.Apf.dvApf()', function() {
    deepEqual(RogerioPradoJ.BoxCalculator.Apf.dvApf('0161138'), '37', '0161138-37');
    deepEqual(RogerioPradoJ.BoxCalculator.Apf.dvApf('1003766'), '33', '1003766-33');
    deepEqual(RogerioPradoJ.BoxCalculator.Apf.dvApf('0216997'), '19', '0216997-19');
    deepEqual(RogerioPradoJ.BoxCalculator.Apf.dvApf('0217000'), '82', '0217000-82');
    deepEqual(RogerioPradoJ.BoxCalculator.Apf.dvApf('0227448'), '95', '0227448-95');
    deepEqual(RogerioPradoJ.BoxCalculator.Apf.dvApf('0230764'), '90', '0230764-90');
})