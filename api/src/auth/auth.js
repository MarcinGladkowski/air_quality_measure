import ip from 'ip';
import Config from '../config/config';

export function checkServer(req, res, next) {

    const remoteAddress = req.headers['x-real-ip'] || req.connection.remoteAddress;

    if (!ip.isEqual(Config.allow_ip, remoteAddress)) {
        return res.status(401).send({'status': 'Ip address not allowed'});
    } 

    next();
}