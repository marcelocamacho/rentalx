import { CreateRentalController } from '@modules/rentals/useCases/CreateRental/CreateRentalController';
import { DevolutionRentalControler } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const rentalRoutes = Router();
const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalControler();
rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalRoutes.post(
    '/devolution/:id',
    ensureAuthenticated,
    devolutionRentalController.handle
);

export { rentalRoutes };
