import express from 'express';
import { getAllApps, getApp, createApp, updateApp, deleteApp } from '../controller/app.controller.js';

const router = express.Router();

router.route('/').get(getAllApps).post(createApp);
router.route('/:id').put(updateApp).delete(deleteApp).get(getApp);

export default router;