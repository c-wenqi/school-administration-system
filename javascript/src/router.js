import Express from 'express';
import HealthcheckController from './controllers/HealthcheckController';
import Registration from './controllers/Registration';
import WorkloadReport from './controllers/WorkloadReport';
const router = Express.Router();

//router.use('/', HealthcheckController);
router.use('/', Registration);
router.use('/reports', WorkloadReport);

export default router;
