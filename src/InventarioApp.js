import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { InventarioView } from './components/inventario/InventarioView';
import { UsuarioView } from './components/usuario/UsuarioView';
import { MarcaView } from './components/marca/MarcaView';
import { EstadoView } from './components/estado/EstadoView';
import { TipoView } from './components/tipo/TipoView';
import { InventarioUpdate } from './components/inventario/inventarioUpdate';
import { UsuarioUpdate } from './components/usuario/usuarioUpdate';
import { EstadoUpdate } from './components/estado/estadoUpdate';
import { TipoUpdate } from './components/tipo/tipoUpdate';
import { MarcaUpdate } from './components/marca/marcaUpdate';

const InventarioApp = () => {
    return <Router>
       <Header />
       <Switch>
          <Route exact path="/" component={InventarioView} />
          <Route exact path="/usuarios" component={UsuarioView} />
          <Route exact path="/marcas" component={MarcaView} />
          <Route exact path="/estados" component={EstadoView} />
          <Route exact path="/tipos" component={TipoView} />
          <Route exact path="/inventario/edit/:inventarioId" component={InventarioUpdate} />
          <Route exact path="/usuario/edit/:usuarioId" component={UsuarioUpdate} />
          <Route exact path="/estado-equipo/edit/:estadoId" component={EstadoUpdate} />
          <Route exact path="/tipo-equipo/edit/:tipoId" component={TipoUpdate} />
          <Route exact path="/marca/edit/:marcaId" component={MarcaUpdate} />
          <Redirect to="/" />
        </Switch>
    </Router>   
}

export {
    InventarioApp,
}