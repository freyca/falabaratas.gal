# Deploy

Edit systemd unit file, you can locate it in systemd/falabaratas.service
Need to edit node path, user&group and finally path to SSR file

```
cp systemd/falabaratas.service /etc/systemd/system/
systemctl daemon-reload

npm run astro build
systemctl start falabaratas
```