# frontend_1b

งานนี้เป็นส่วนหนึ่งของรายวิชา 240-420 ใช้ Gatsby เป็น Static Site Generator(SSG) โดยจะมีการดึงข้อมูลจาก API ในรูปแบบ GraphQL จาก [repo นี้](https://github.com/str3lyx/directus-backend-1b)

## Dependencies

+ `nodejs` v18
+ `npm`

## Setup

```
git clone https://github.com/str3lyx/frontend_1b.git
cd frontend_1b
npm install
```

## ตั้งค่า url ของ directus
แก้ไขไฟล์ .env.development (สำหรับ development environment)
```
DIRECTUS_URL=*index url ของ directus*
DIRECTUS_TOKEN=*ัyour token from user permission setting*
```
แก้ไขไฟล์ .env.production (สำหรับ build)
```
DIRECTUS_URL=*index url ของ directus*
DIRECTUS_TOKEN=*ัyour token from user permission setting*
```

## Start Development Environment
(เปิด server ของ directus ก่อน)
```
npm run develop
```

## Build
(เปิด server ของ directus ก่อน)
```
npm run build
```

## Deploy to GitHub Pages
(ต้อง Build ก่อน)
```
npm run deploy
```
