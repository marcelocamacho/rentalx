import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/ListSpecificationController';
import { ensureAdmin } from '@shared/infra/http/middleware/ensureAdmin';
import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();
specificationRoutes.post(
    '/',
    ensureAuthenticated,
    ensureAdmin,
    createSpecificationController.handle
);
specificationRoutes.get('/', listSpecificationController.handle);

export { specificationRoutes };
