# Bank İşgärlerini Dolandyryş Sistemi

Bu taslama, bank işgärleriniň maglumatlaryny dolandyrmak üçin işlenip düzülen web programma. Node.js, Express.js we PostgreSQL tehnologiýalary ulanylyp düzüldi.

## Aýratynlyklar

- İşgärler sanawyny görkezme
- Täze işgär goşma
- İşgär pozma
- Esasy sahypa (Baş Sahypa, Biz Barada, Habarlaşma)

## Ulanylan Tehnologiýalar

- Node.js (Serwer tarap JavaScript platformasy)
- Express.js
- PostgreSQL (Maglumatlar bazasy)
- Sequelize ORM (Maglumatlar bazasyny dolandyrmak guraly)
- EJS (Şablon motory)

## Gurmak

1. Taslamany kompýutere ýükläň:
```bash
git clone https://github.com/mekanio20/bank_project.git
cd bank_project
```

2. Gerekli paketleri ýükläň:
```bash
npm install
```

3. PostgreSQL maglumatlar bazasyny guryň we `db.js` faýlynda maglumatlar bazasy baglanyşma maglumatlaryny sazlaň.

4. Programmany başlat:
```bash
npm start
```

## Nähili Ulanylmagy

Programma standart boýunça `http://localhost:5001` salgysynda işleýär.

- Baş Sahypa: `/`
- İşgärler Sahypasy: `/employees`
- Biz Barada: `/about`
- Habarlaşma: `/contact`