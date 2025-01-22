import express from 'express';
import { getAllApps, getApp, createApp, updateApp, deleteApp } from '../controller/app.controller.js';

const router = express.Router();

router.route('/').get(getAllApps).post(createApp);
router.route('/:id').get(getApp).put(updateApp).delete(deleteApp);

export default router;