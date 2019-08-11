import express from 'express';
import {CloudConfig} from './cloud/config';

const app = express();
const _cloud_config = new CloudConfig();
const configOptions = {
  name: '',
  endpoint: 'localhost',
};
const {PORT} = process.env;
const port = PORT || 4003;

_cloud_config.load(configOptions, (config) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
