import express, { Application } from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';

//Rutas
import RootRoutes from './routes/root.route';
import DepartamentoRoutes from './routes/departamento.routes';

export class App {

    private app: Application;
    private server: any;

    constructor(private port?: number | string) {

        this.app = express();
        this.server = http.createServer(this.app);
        this.settings();
        this.middlewares();
        this.routes();

    }

    settings(): void {

        this.app.set('port', process.env.PORT || 3000);

    }

    middlewares(): void {

        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));  //Esta linea se utiliza cuando enviamos datos del formulario

    }

    routes(): void {

        this.app.use("", RootRoutes);
        this.app.use('/api/v1/departamentos', DepartamentoRoutes );
        // this.app.use('/api/v1/', );

    }

    async listen() {

        this.server.listen(this.app.get('port'));
        console.log('Server on Port', this.app.get('port'));
        
    }

}