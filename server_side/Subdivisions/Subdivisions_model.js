
var basemodel = require('../basemodel.js');

var modelSubdiv = new basemodel.Basemodel();

modelSubdiv.getRecords = 'SELECT id, name FROM public.subdivisions order by 1';
modelSubdiv.addRecords = 'INSERT INTO public.subdivisions(id, name) VALUES ($1, $2)';
modelSubdiv.delRecords = 'DELETE FROM public.subdivisions where id = ($1)';
modelSubdiv.updRecords = 'UPDATE public.subdivisions SET name = ($2) WHERE id = ($1)';

exports.modelSubdiv = modelSubdiv;








