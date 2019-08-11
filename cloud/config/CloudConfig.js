import config from 'cloud-config-client';

export class CloudConfig {
  load(options, cb) {
    return config.load(options, cb);
  }
}
