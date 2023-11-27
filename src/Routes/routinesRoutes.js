import express from 'express';
import {
  janeAMSkincare,
  janePMSkincare,
  johnAMSkincare,
} from '../src/routines.js';

const router = express.Router();

router.get('/jane/am-skincare', (req, res) => {
  res.json(janeAMSkincare);
});

router.get('/jane/pm-skincare', (req, res) => {
  res.json(janePMSkincare);
});

router.get('/john/am-skincare', (req, res) => {
  res.json(johnAMSkincare);
});

export default router;
