import { CreateRentalController } from '@modules/rentals/useCases/CreateRental/CreateRentalController';
import { DevolutionRentalControler } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalController';
import { ListRentalByUserController } from '@modules/rentals/useCases/listRentalByUser/ListRentalByUserController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const rentalRoutes = Router();
const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalControler();
const listRentalByUserController = new ListRentalByUserController();
rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalRoutes.post(
    '/devolution/:id',
    ensureAuthenticated,
    devolutionRentalController.handle
);
rentalRoutes.get(
    '/user',
    ensureAuthenticated,
    listRentalByUserController.handle
);

export { rentalRoutes };
