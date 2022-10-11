import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { InventarioView } from './components/inventario/InventarioView';
import { UsuarioView } from './components/usuario/UsuarioView';
import { MarcaView } from './components/marca/MarcaView';
import { EstadoView } from './components/estado/EstadoView';
import { TipoView } from './components/tipo/TipoView';
import { inventarioUpdate } from './components/inventario/inventarioUpdate';
import { usuarioUpdate } from './components/usuario/usuarioUpdate';
import { estadoUpdate } from './components/estado/estadoUpdate';
import { tipoUpdate } from './components/tipo/tipoUpdate';
import { marcaUpdate } from './components/marca/marcaUpdate';

const InventarioApp = () => {
    return <Router>
       <Header />
       <Switch>
          <Route exact path="/" component={InventarioView} />
          <Route exact path="/usuarios" component={UsuarioView} />
          <Route exact path="/marcas" component={MarcaView} />
          <Route exact path="/estados" component={EstadoView} />
          <Route exact path="/tipos" component={TipoView} />
          <Route exact path="/inventario/edit/:inventarioId" component={inventarioUpdate} />
          <Route exact path="/usuario/edit/:usuarioId" component={usuarioUpdate} />
          <Route exact path="/estado-equipo/edit/:estadoId" component={estadoUpdate} />
          <Route exact path="/tipo-equipo/edit/:tipoId" component={tipoUpdate} />
          <Route exact path="/marca/edit/:marcaId" component={marcaUpdate} />
          <Redirect to="/" />
        </Switch>
    </Router>   
}

export {
    InventarioApp,
}