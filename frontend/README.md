* **Server Side: Rails v8.1.2**
* **Front End: React v19.2.4**
* **Front Build tools: vite_rails v3.11.0**
* **Database: PostgreSQL v18**

```
$ npm list react
frontend@ /rails_v8.1.2_react19_vite
├─┬ react-dom@19.2.4
│ └── react@19.2.4 deduped
└── react@19.2.4
```

### 開発環境の準備
**【Docker開発環境】**  
```
$ git clone https://github.com/sokamur-phoenix-sample/react_sample.git
$ cd rails_v8.1.2_react19_vite
$ docker compose up -d --build
$ docker compose exec app bin/rails db:migrate
* URL
<http://localhost:3000>
