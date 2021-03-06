# My Application

The project is generated by [LoopBack](http://loopback.io).

Steps to start a site:
1. Get digital ocean droplet ubuntu mongodb;
2. Install nvm and latest node
3. clone repo
4. setup pm2 https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
5. Get custom domain
6. setup nginx
7. nginx conf: (sites-enabled)
upstream loopback_api {
  server 127.0.0.1:3000;
}
upstream strider {
  server 127.0.0.1:3333;
}

server {
  listen 80;
  server_name strider.smarthockeymanager.com;

  location / {
    proxy_pass http://strider;
  }

}

server {
  listen 80 default;
  server_name smarthockeymanager.com;

  location /api {
    proxy_pass http://loopback_api/api;
  }

  root /root/smart-hockey-manager-backend/client;

    listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/smarthockeymanager.com/fullchain.pem; # managed by Certbot
ssl_certificate_key /etc/letsencrypt/live/smarthockeymanager.com/privkey.pem; # managed by Certbot
ssl_session_cache shared:le_nginx_SSL:1m; # managed by Certbot
ssl_session_timeout 1440m; # managed by Certbot

ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # managed by Certbot
ssl_prefer_server_ciphers on; # managed by Certbot

ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256 ECDHE-ECDSA-AES256-GCM-SHA384 ECDHE-ECDSA-AES128-SHA ECDHE-ECDSA-AES256-SHA ECDHE-ECDSA-AES128-SHA256 ECDHE-ECDSA-AES256-SHA384 ECDHE-RSA-AES128-GCM-SHA256 ECDHE-RSA-AES256-GCM-SHA384 ECDHE-RSA-AES128-SHA ECDHE-RSA-AES128-SHA256 ECDHE-RSA-AES256-SHA384 DHE-RSA-AES128-GCM-SHA256 DHE-RSA-AES256-GCM-SHA384 DHE-RSA-AES128-SHA DHE-RSA-AES256-SHA DHE-RSA-AES128-SHA256 DHE-RSA-AES256-SHA256 EDH-RSA-DES-CBC3-SHA"; # managed by Certbot



    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    } # managed by Certbot

}

8. link domain with our server:
https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean
9. install ssl using let's encrypt
10. setup let's encrypt for automatic renewal
11. install strider for ci and cd
