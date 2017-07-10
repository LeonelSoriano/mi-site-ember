"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('mi-site/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, _ember, _emberfireAdaptersFirebase) {
  var inject = _ember['default'].inject;
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({
    firebase: inject.service()
  });
});
define('mi-site/app', ['exports', 'ember', 'mi-site/resolver', 'ember-load-initializers', 'mi-site/config/environment'], function (exports, _ember, _miSiteResolver, _emberLoadInitializers, _miSiteConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _miSiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _miSiteConfigEnvironment['default'].podModulePrefix,
    Resolver: _miSiteResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _miSiteConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('mi-site/components/dashboard-template', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		routing: _ember['default'].inject.service('-routing'),
		session: _ember['default'].inject.service('session'),
		emailUser: '',
		init: function init() {
			this._super();
			this.set('emailUser', this.get('session.currentUser.email'));
		},

		actions: {

			signOut: function signOut() {
				this.get("routing").transitionTo("login");
				this.get('session').close();
			},

			goToNewSerie: function goToNewSerie() {
				this.get("routing").transitionTo("newSerie");
			},

			goToListSerie: function goToListSerie() {
				console.log(this.get("routing").transitionTo("listSerie"));
			}

		}

	});
});
define('mi-site/components/sweet-alert', ['exports', 'ember-sweetalert/components/sweet-alert'], function (exports, _emberSweetalertComponentsSweetAlert) {
  exports['default'] = _emberSweetalertComponentsSweetAlert['default'];
});
define('mi-site/components/table-filter', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        store: _ember['default'].inject.service(),

        init: function init() {
            var ejemplo = this.get('store').findAll('serie');
            console.log(ejemplo);
            return this._super();
        }

    });
});
define('mi-site/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiComponentsToriiIframePlaceholder) {
  exports['default'] = _toriiComponentsToriiIframePlaceholder['default'];
});
define('mi-site/components/zf-accordion-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion-menu'], function (exports, _emberCliFoundation6SassComponentsZfAccordionMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordionMenu['default'];
    }
  });
});
define('mi-site/components/zf-accordion', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion'], function (exports, _emberCliFoundation6SassComponentsZfAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordion['default'];
    }
  });
});
define('mi-site/components/zf-drilldown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-drilldown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDrilldownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDrilldownMenu['default'];
    }
  });
});
define('mi-site/components/zf-dropdown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdownMenu['default'];
    }
  });
});
define('mi-site/components/zf-dropdown', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown'], function (exports, _emberCliFoundation6SassComponentsZfDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdown['default'];
    }
  });
});
define('mi-site/components/zf-magellan', ['exports', 'ember-cli-foundation-6-sass/components/zf-magellan'], function (exports, _emberCliFoundation6SassComponentsZfMagellan) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfMagellan['default'];
    }
  });
});
define('mi-site/components/zf-off-canvas', ['exports', 'ember-cli-foundation-6-sass/components/zf-off-canvas'], function (exports, _emberCliFoundation6SassComponentsZfOffCanvas) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOffCanvas['default'];
    }
  });
});
define('mi-site/components/zf-orbit', ['exports', 'ember-cli-foundation-6-sass/components/zf-orbit'], function (exports, _emberCliFoundation6SassComponentsZfOrbit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOrbit['default'];
    }
  });
});
define('mi-site/components/zf-reveal', ['exports', 'ember-cli-foundation-6-sass/components/zf-reveal'], function (exports, _emberCliFoundation6SassComponentsZfReveal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfReveal['default'];
    }
  });
});
define('mi-site/components/zf-slider', ['exports', 'ember-cli-foundation-6-sass/components/zf-slider'], function (exports, _emberCliFoundation6SassComponentsZfSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfSlider['default'];
    }
  });
});
define('mi-site/components/zf-tabs', ['exports', 'ember-cli-foundation-6-sass/components/zf-tabs'], function (exports, _emberCliFoundation6SassComponentsZfTabs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTabs['default'];
    }
  });
});
define('mi-site/components/zf-tooltip', ['exports', 'ember-cli-foundation-6-sass/components/zf-tooltip'], function (exports, _emberCliFoundation6SassComponentsZfTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTooltip['default'];
    }
  });
});
define('mi-site/controllers/list-serie', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('mi-site/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({

		actions: {
			signIn: function signIn() {
				var self = this;

				this.get('session').open('firebase', {
					provider: 'password',
					email: this.get('email'),
					password: this.get('myPassword')
				}).then(function (data) {
					console.log(data);
					self.transitionToRoute("welcome");
				})['catch'](function (data) {
					_ember['default'].$("#msg-login-erro").show();
					self.set('logionErrorMsg', data);
				});
			}
		}

	});

	/*signIn: function(provider) {
 this.get('session').open('firebase', {
 provider: 'password',
 email: 'leonelsoriano3@gmail.com',
 password: '19165597'
 }).then(function(data) {
     console.log(data.currentUser);
    });
 */
});
define('mi-site/controllers/new-serie', ['exports', 'ember', 'ember-sweetalert/mixins/sweetalert-mixin'], function (exports, _ember, _emberSweetalertMixinsSweetalertMixin) {

    var Validation = _ember['default'].Object.extend({
        name: '',
        gender: '',
        description: ''
    });

    exports['default'] = _ember['default'].Controller.extend(_emberSweetalertMixinsSweetalertMixin['default'], {

        entitySerie: {},

        validation: Validation.create({}),

        init: function init() {

            this.set('entitySerie', this.store.createRecord('Serie'));
            //  console.log(this.entitySerie);
        },

        actions: {
            saveSerie: function saveSerie() {
                this.entitySerie.set("gender", _ember['default'].$("#genderSelect").val());

                var result = this.entitySerie.doValidation();
                this.validation.set('name', result.get("name.errors"));
                this.validation.set('description', result.get("description.errors"));
                this.validation.set('gender', result.get("gender.errors"));

                if (result.get('isValid')) {

                    var self = this;
                    this.entitySerie.save().then(function () {

                        var sweetAlert = self.get('sweetAlert');
                        sweetAlert({
                            title: 'Guardado correctamente',
                            type: 'success',
                            confirmButtonText: 'Ok'
                        }).then(function () {
                            self.entitySerie.set('name', '');

                            self.entitySerie.set('description', '');
                            _ember['default'].$("#genderSelect").prop("selectedIndex", 0);
                            self.validation.set('name', '');
                            self.validation.set('description', '');
                            self.validation.set('gender', '');
                        });
                    })['catch'](function () {
                        var msg = self.get('sweetAlert');
                        msg({
                            title: 'Error no se pudo guardar la inforacion',
                            type: 'error',
                            confirmButtonText: 'Ok'
                        });
                    });
                } else {}
            }
        } //end action

    });
});
define('mi-site/controllers/welcome', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('mi-site/helpers/app-version', ['exports', 'ember', 'mi-site/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _miSiteConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _miSiteConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('mi-site/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('mi-site/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('mi-site/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'mi-site/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _miSiteConfigEnvironment) {
  var _config$APP = _miSiteConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('mi-site/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('mi-site/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('mi-site/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('mi-site/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('mi-site/initializers/export-application-global', ['exports', 'ember', 'mi-site/config/environment'], function (exports, _ember, _miSiteConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_miSiteConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _miSiteConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_miSiteConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('mi-site/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
define('mi-site/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _toriiBootstrapSession, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _toriiBootstrapSession['default'])(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
define('mi-site/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'mi-site/config/environment'], function (exports, _toriiBootstrapTorii, _toriiConfiguration, _miSiteConfigEnvironment) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiConfiguration.configure)(_miSiteConfigEnvironment['default'].torii || {});
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports['default'] = initializer;
});
define('mi-site/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('mi-site/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('mi-site/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('mi-site/initializers/zf-widget', ['exports', 'ember-cli-foundation-6-sass/initializers/zf-widget'], function (exports, _emberCliFoundation6SassInitializersZfWidget) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget.initialize;
    }
  });
});
define("mi-site/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('mi-site/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/router-dsl-ext'], function (exports, _toriiBootstrapRouting, _toriiConfiguration, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      var router = applicationInstance.get('router');
      var setupRoutes = function setupRoutes() {
        var authenticatedRoutes = router.router.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
define('mi-site/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _toriiLibContainerUtils, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('mi-site/mixins/sweetalert-mixin', ['exports', 'ember-sweetalert/mixins/sweetalert-mixin'], function (exports, _emberSweetalertMixinsSweetalertMixin) {
  exports['default'] = _emberSweetalertMixinsSweetalertMixin['default'];
});
define('mi-site/models/serie', ['exports', 'ember-data', 'ember-validator'], function (exports, _emberData, _emberValidator) {
  exports['default'] = _emberData['default'].Model.extend(_emberValidator['default'], {
    name: _emberData['default'].attr('string'),
    gender: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),

    rules: {
      name: {
        required: {
          message: "El nombre es requerido"
        },
        length: {
          minimum: 4,
          maximum: 128,
          messages: {
            minimum: 'El nombre debe tener por lo menos 4 caracteres',
            maximum: 'El nombre no puede tener mas de 100 caracteres'
          }
        }
      },
      gender: {
        contains: {
          exclude: ['Selecciona'],
          message: 'Debes seleccionar un genero'
        }
      },
      description: {
        length: {
          minimum: 15,
          maximum: 255,
          messages: {
            minimum: 'La descripcion debe tener por lo menos 15 caracteres',
            maximum: 'La descripcion no puede tener mas de 255 caracteres'
          }
        }
      }
    },

    doValidation: function doValidation() {

      var result = this.validate({
        validations: this.rules,
        noPromise: true
      });
      return result;
    }

  });
});
define('mi-site/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('mi-site/router', ['exports', 'ember', 'mi-site/config/environment'], function (exports, _ember, _miSiteConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _miSiteConfigEnvironment['default'].locationType,
    rootURL: _miSiteConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('welcome');
    this.route('login');
    this.route('newSerie');
    this.route('listSerie');
  });

  exports['default'] = Router;
});
define('mi-site/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {

      //console.log(this.get('session.currentUser.email'));

      return this.get('session').fetch()['catch'](function () {});
    },

    afterModel: function afterModel() {
      if (this.get('session.isAuthenticated')) {
        //this.transitionTo('welcome');
      } else {
          this.transitionTo('login');
        }
    },
    actions: {

      accessDenied: function accessDenied() {
        this.transitionTo('login');
      }
    }
  });
});
define('mi-site/routes/list-serie', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('mi-site/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('mi-site/routes/new-serie', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('mi-site/routes/welcome', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('mi-site/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('mi-site/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('mi-site/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define('mi-site/services/popup', ['exports', 'torii/services/popup'], function (exports, _toriiServicesPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesPopup['default'];
    }
  });
});
define('mi-site/services/torii-session', ['exports', 'torii/services/session'], function (exports, _toriiServicesSession) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesSession['default'];
    }
  });
});
define('mi-site/services/torii', ['exports', 'torii/services/torii'], function (exports, _toriiServicesTorii) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesTorii['default'];
    }
  });
});
define('mi-site/services/validator-cache', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    _initialize: _ember['default'].on('init', function () {
      this.set('cache', {});
    })
  });
});
define("mi-site/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DOQtiM+v", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "mi-site/templates/application.hbs" } });
});
define("mi-site/templates/components/dashboard-template",["exports"],function(exports){exports["default"] = Ember.HTMLBars.template({"id":"xgy6S8pj","block":"{\"statements\":[[\"text\",\"\\n\\n  \"],[\"open-element\",\"script\",[]],[\"static-attr\",\"src\",\"js/pace.js\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\n    \"],[\"open-element\",\"script\",[]],[\"static-attr\",\"src\",\"js/modernizr.js\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"  pace-done\"],[\"static-attr\",\"data-whatinput\",\"mouse\"],[\"static-attr\",\"style\",\"overflow: visible;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"slicknav_nav slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/index.html\"],[\"static-attr\",\"title\",\"Dashboard\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Deep-Purple-700 bg ti-desktop\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Dashboard\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Indigo-700 bg ti-layout\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Layout\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"side-menu-noft\"],[\"flush-element\"],[\"text\",\"New\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/sidebar-fixed.html\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Sidebar Fixed\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/all-fixed.html\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"All Fixed\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"Mail\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Cyan-700 bg ti-paint-roller\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Skin\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/blue-skin.html\"],[\"static-attr\",\"title\",\"Black Skin\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Blue Skin\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/white-skin.html\"],[\"static-attr\",\"title\",\"White Skin\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"White Skin\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/purple-skin.html\"],[\"static-attr\",\"title\",\"Blue Skin\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Purple Skin\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"Mail\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Blue-700 bg ti-email\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"mail\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/mail.html\"],[\"static-attr\",\"title\",\"Inbox\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Inbox\\n                                                 \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"noft-blue bg-red\"],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"256\"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/compose.html\"],[\"static-attr\",\"title\",\"Compose\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Compose\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Blue-900 bg ti-write\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Page \\n                                    \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"side-menu-noft bg-blue\"],[\"flush-element\"],[\"text\",\"hot\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/blog-list.html\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Blog List\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/blog-detail.html\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Blog Detail\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/gallery.html\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Gallery\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/calendar.html\"],[\"static-attr\",\"title\",\"Calender\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Calendar\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/master.html\"],[\"static-attr\",\"title\",\"Chart\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Blank Page\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"UI\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Teal-600 bg ti-vector\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"UI \\n                                    \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"side-menu-noft\"],[\"flush-element\"],[\"text\",\"new\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/element.html\"],[\"static-attr\",\"title\",\"Element\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/button.html\"],[\"static-attr\",\"title\",\"Button\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"\\n                                            Button\\n                                        \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/tab.html\"],[\"static-attr\",\"title\",\"Tab & Accordion\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Tab & Accordion\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/typography.html\"],[\"static-attr\",\"title\",\"Typography\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"\\n\\n                                                Typography\\n                                            \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/panel.html\"],[\"static-attr\",\"title\",\"panel\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Panel\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/grids.html\"],[\"static-attr\",\"title\",\"Grids\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Grids\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/chart.html\"],[\"static-attr\",\"title\",\"Chart\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Chart\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Green-700 bg ti-layers-alt\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Form   \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"side-menu-noft\"],[\"flush-element\"],[\"text\",\"new\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/form-element.html\"],[\"static-attr\",\"title\",\"Form Elements\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Form Elements\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/andvance-form.html\"],[\"static-attr\",\"title\",\"Andvance Form\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Andvance Form\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/text-editor.html\"],[\"static-attr\",\"title\",\"Text Editor\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Text Editor\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/file-upload.html\"],[\"static-attr\",\"title\",\"File Upload\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"File Upload\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Lime-700 bg ti-harddrives\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Tables\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Table Static\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Table Static\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Table Dynamic\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Table Dynamic\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Icons\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Orange-700 bg ti-zip\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Icons\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"slicknav_collapsed slicknav_parent\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"class\",\"slicknav_item slicknav_row\"],[\"static-attr\",\"style\",\"outline: none;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"Extra\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Pink-700 bg ti-gift\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Extra\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"slicknav_arrow\"],[\"flush-element\"],[\"text\",\"►\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"role\",\"menu\"],[\"static-attr\",\"class\",\"slicknav_hidden\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Invoice\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Invoice\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Pricing Table\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Pricing Table\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Time Line\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Time Line\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Chart\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Lock Screen\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"Map\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"404 Error Page\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"404 Error Page\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"500 Error Page\"],[\"static-attr\",\"role\",\"menuitem\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"500 Error Page\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pace  pace-inactive\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pace-progress\"],[\"static-attr\",\"data-progress-text\",\"100%\"],[\"static-attr\",\"data-progress\",\"99\"],[\"static-attr\",\"style\",\"width: 100%;\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pace-progress-inner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pace-activity\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\" preloader \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"preloader\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"status\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\" End of preloader \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"off-canvas-wrapper over-flow-hidden\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"off-canvas-wrapper-inner\"],[\"static-attr\",\"data-off-canvas-wrapper\",\"\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"comment\",\" right sidebar wrapper \"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"inner-wrap\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"comment\",\" Right sidemenu \"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"skin-select\"],[\"static-attr\",\"style\",\"width: 260px;\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"comment\",\"      Toggle sidemenu icon button \"],[\"text\",\"\\n                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"id\",\"toggle\"],[\"static-attr\",\"class\",\"\"],[\"flush-element\"],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"comment\",\"      End of Toggle sidemenu icon button \"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"skin-part\"],[\"static-attr\",\"style\",\"visibility: visible;\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"tree-wrap\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"comment\",\" Profile \"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"profile\"],[\"static-attr\",\"style\",\"top: -10px;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"alt\",\"\"],[\"static-attr\",\"class\",\"\"],[\"static-attr\",\"src\",\"img/yeti.svg\"],[\"static-attr\",\"style\",\"width: 45px; height: 45px; top: 15px; left: 4px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"style\",\"display: block;\"],[\"flush-element\"],[\"text\",\"My site\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"ADMIN\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"comment\",\" End of Profile \"],[\"text\",\"\\n                            \"],[\"comment\",\" Menu sidebar begin\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"side-bar\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"id\",\"menu-showhide\"],[\"static-attr\",\"class\",\"topnav slicknav\"],[\"static-attr\",\"style\",\"height: auto; margin: -13px 0px 0px;\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"id\",\"menu-select\"],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Dashboard\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Deep-Purple-700 bg ti-desktop\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Bienvenido\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n \\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip  tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Red-600 bg ti-desktop\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Mis series\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"goToNewSerie\"]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"Crear serie\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"goToListSerie\"]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"Lista de series\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"Mail\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Cyan-700 bg ti-paint-roller\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Skin\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Black Skin\"],[\"flush-element\"],[\"text\",\"Blue Skin\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"White Skin\"],[\"flush-element\"],[\"text\",\"White Skin\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Blue Skin\"],[\"flush-element\"],[\"text\",\"Purple Skin\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"Mail\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Blue-700 bg ti-email\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"mail\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Inbox\"],[\"flush-element\"],[\"text\",\"Inbox\\n                                                 \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"noft-blue bg-red\"],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"256\"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Compose\"],[\"flush-element\"],[\"text\",\"Compose\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"static-attr\",\"id\",\"leonel\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Blue-900 bg ti-write\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Page \\n                                    \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"side-menu-noft bg-blue\"],[\"flush-element\"],[\"text\",\"hot\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px;\"],[\"flush-element\"],[\"text\",\"\\n\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Blog List\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Blog Detail\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Gallery\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Calender\"],[\"flush-element\"],[\"text\",\"Calendar\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Chart\"],[\"flush-element\"],[\"text\",\"Blank Page\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"UI\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Teal-600 bg ti-vector\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"UI \\n                                    \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"side-menu-noft\"],[\"flush-element\"],[\"text\",\"new\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/element.html\"],[\"static-attr\",\"title\",\"Element\"],[\"flush-element\"],[\"text\",\"Element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/button.html\"],[\"static-attr\",\"title\",\"Button\"],[\"flush-element\"],[\"text\",\"\\n                                            Button\\n                                        \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Tab & Accordion\"],[\"flush-element\"],[\"text\",\"Tab & Accordion\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Typography\"],[\"flush-element\"],[\"text\",\"\\n\\n                                                Typography\\n                                            \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"panel\"],[\"flush-element\"],[\"text\",\"Panel\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Grids\"],[\"flush-element\"],[\"text\",\"Grids\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Chart\"],[\"flush-element\"],[\"text\",\"Chart\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Green-700 bg ti-layers-alt\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Form   \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"side-menu-noft\"],[\"flush-element\"],[\"text\",\"new\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Form Elements\"],[\"flush-element\"],[\"text\",\"Form Elements\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Andvance Form\"],[\"flush-element\"],[\"text\",\"Andvance Form\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"Text Editor\"],[\"flush-element\"],[\"text\",\"Text Editor\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"title\",\"File Upload\"],[\"flush-element\"],[\"text\",\"File Upload\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Lime-700 bg ti-harddrives\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Tables\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px; display: none;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/table-static.html\"],[\"static-attr\",\"title\",\"Table Static\"],[\"flush-element\"],[\"text\",\"Table Static\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/table-dynamic.html\"],[\"static-attr\",\"title\",\"Table Dynamic\"],[\"flush-element\"],[\"text\",\"Table Dynamic\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/icon.html\"],[\"static-attr\",\"title\",\"Icons\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"intial palette-Orange-700 bg ti-zip\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Icons\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"tooltip-tip tooltipster-disable\"],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"static-attr\",\"title\",\"Extra\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"palette-Pink-700 bg ti-gift\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"text\",\"Extra\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"style\",\"display: inline-block; float: none;\"],[\"flush-element\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"fa fa-circle\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"border-radius: 0px; padding: 15px 25px;\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/invoice.html\"],[\"static-attr\",\"title\",\"Invoice\"],[\"flush-element\"],[\"text\",\"Invoice\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/pricing_table.html\"],[\"static-attr\",\"title\",\"Pricing Table\"],[\"flush-element\"],[\"text\",\"Pricing Table\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/time-line.html\"],[\"static-attr\",\"title\",\"Time Line\"],[\"flush-element\"],[\"text\",\"Time Line\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/login.html\"],[\"static-attr\",\"title\",\"Chart\"],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/map.html\"],[\"static-attr\",\"title\",\"Lock Screen\"],[\"flush-element\"],[\"text\",\"Map\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/404.html\"],[\"static-attr\",\"title\",\"404 Error Page\"],[\"flush-element\"],[\"text\",\"404 Error Page\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left;\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ndesaintheme.com/fondamix/500.html\"],[\"static-attr\",\"title\",\"500 Error Page\"],[\"flush-element\"],[\"text\",\"500 Error Page\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"comment\",\" end of Menu sidebar  \"],[\"text\",\"\\n                            \"],[\"comment\",\"bottom chat\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"chat-list-menu\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"text\",\"Direct Message (10) \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-arrow-circle-down\"],[\"static-attr\",\"style\",\"top: 0px; left: -15px; padding: 8px 0px;\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"online\"],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Themesmile (You)\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"online\"],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" IamUcil\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Yudha\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Nady\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Andre\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Gloria\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"online\"],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Destya\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Yuanita\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Ari\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-control-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Dhanie\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"comment\",\"end of bottom chat\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"bottom-list-menu\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"text\",\"Settings \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-settings\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"text\",\"Help \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-flag-alt-2\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"text-align: left; display: block;\"],[\"flush-element\"],[\"text\",\"About Edumix \"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"ti-infinite\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"comment\",\" end of Rightsidemenu \"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"wrap-fluid\"],[\"static-attr\",\"id\",\"paper-bg\"],[\"static-attr\",\"style\",\"width: auto; margin-left: 260px;\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"comment\",\" Top Nav \"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title-bar\"],[\"static-attr\",\"data-responsive-toggle\",\"example-menu\"],[\"static-attr\",\"data-hide-for\",\"medium\"],[\"static-attr\",\"style\",\"display: none;\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"menu-icon\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"data-toggle\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title-bar-title\"],[\"flush-element\"],[\"text\",\"Menu\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-bar\"],[\"static-attr\",\"id\",\"example-menu\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-bar-left\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown menu menu-profile bg-white\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"comment\",\" PROFILE\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"bg-white\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"alt\",\"profile\"],[\"static-attr\",\"class\",\"admin-pic img-circle palette-Grey-900 bg\"],[\"static-attr\",\"src\",\"./img/foto.png\"],[\"static-attr\",\"style\",\"margin: 20px 0px 0px 20px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"bg-white\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"bg-white text-gray\"],[\"static-attr\",\"data-toggle\",\"profile-dropdown\"],[\"static-attr\",\"aria-controls\",\"profile-dropdown\"],[\"static-attr\",\"data-is-focus\",\"false\"],[\"static-attr\",\"data-yeti-box\",\"profile-dropdown\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"emailUser\"]],false],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"dropdown-pane dropdown-pane-nest profile-nest bottom\"],[\"static-attr\",\"id\",\"profile-dropdown\"],[\"static-attr\",\"data-dropdown\",\"3j1qz9-dropdown\"],[\"static-attr\",\"data-auto-focus\",\"true\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"data-yeti-box\",\"profile-dropdown\"],[\"static-attr\",\"data-resize\",\"profile-dropdown\"],[\"static-attr\",\"aria-labelledby\",\"90rhs2-dd-anchor\"],[\"static-attr\",\"data-events\",\"resize\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"menu vertical dropdown profile-dropdown\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-user palette-Indigo-500 bg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Profile\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-aqua fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-wallet palette-Blue-700 bg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" Accounts\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-power-off palette-Light-Blue-900 bg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Log Out\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n                                        \"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"comment\",\" end of PROFILE\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-bar-right\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown vertical medium-horizontal menu bg-white\"],[\"static-attr\",\"data-dropdown-menu\",\"sfdv3d-dropdown-menu\"],[\"static-attr\",\"role\",\"menubar\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"comment\",\" Search | has-form wrapper \"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"bg-white\"],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"navbar-form navbar-left\"],[\"static-attr\",\"style\",\"position:relative\"],[\"static-attr\",\"role\",\"search\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"dark\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"input-top\"],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"placeholder\",\"search\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"comment\",\" End Of Search | has-form wrapper \"],[\"text\",\"\\n                                    \"],[\"comment\",\"MESSAGE\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"bg-white\"],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"button bg-white float-right\"],[\"static-attr\",\"data-toggle\",\"msg-dropdown\"],[\"static-attr\",\"aria-controls\",\"msg-dropdown\"],[\"static-attr\",\"data-is-focus\",\"false\"],[\"static-attr\",\"data-yeti-box\",\"msg-dropdown\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"static-attr\",\"tabindex\",\"0\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-agenda palette-Pink-500 text\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"label edumix-msg-noft palette-Pink-500 bg\"],[\"flush-element\"],[\"text\",\"84\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"dropdown-pane dropdown-pane-nest bottom\"],[\"static-attr\",\"id\",\"msg-dropdown\"],[\"static-attr\",\"data-dropdown\",\"u9mhmg-dropdown\"],[\"static-attr\",\"data-auto-focus\",\"true\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"data-yeti-box\",\"msg-dropdown\"],[\"static-attr\",\"data-resize\",\"msg-dropdown\"],[\"static-attr\",\"aria-labelledby\",\"dru3fo-dd-anchor\"],[\"static-attr\",\"data-events\",\"resize\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"menu vertical dropdown dropdown-wrap\"],[\"flush-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-dropdown-nest\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"label round bg-green\"],[\"flush-element\"],[\"text\",\"MESSAGE\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\" text-black\"],[\"flush-element\"],[\"text\",\" Big Boss\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"text-red fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Just Now\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\" text-black\"],[\"flush-element\"],[\"text\",\"Important task!\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slimScrollDiv\"],[\"static-attr\",\"style\",\"position: relative; overflow: hidden; width: auto; height: 180px;\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slim-scroll\"],[\"static-attr\",\"style\",\"overflow: hidden; width: auto; height: 180px;\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Noel A. Riley\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"text-green fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"12:23\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"PM\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Dua dua sayang adik kakak\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Shirley J. Carneal\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"text-gray fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"10:11\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"PM\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Tiga tiga sayang kekasihku\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Paul L. Williamsr\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"text-gray fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Yesterday\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Empat empat sayang semuanya\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"William L. Wilcox\"],[\"open-element\",\"b\",[]],[\"static-attr\",\"class\",\"text-gray fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"2 Days Ago\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Yang jomblo kasian deh lu\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slimScrollBar\"],[\"static-attr\",\"style\",\"background: rgb(0, 0, 0); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 135px;\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slimScrollRail\"],[\"static-attr\",\"style\",\"width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"active right\"],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"label bg-white\"],[\"flush-element\"],[\"text\",\"More...\"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"comment\",\"end of MESSAGE\"],[\"text\",\"\\n\\n                                    \"],[\"comment\",\"NOTIFICATION\"],[\"text\",\"\\n\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"bg-white\"],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"button bg-white float-right\"],[\"static-attr\",\"data-toggle\",\"notf-dropdown\"],[\"static-attr\",\"aria-controls\",\"notf-dropdown\"],[\"static-attr\",\"data-is-focus\",\"false\"],[\"static-attr\",\"data-yeti-box\",\"notf-dropdown\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-bell  palette-Purple-500 text\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"label edumix-noft palette-Purple-500 bg\"],[\"flush-element\"],[\"text\",\"40\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"dropdown-pane dropdown-pane-nest bottom\"],[\"static-attr\",\"id\",\"notf-dropdown\"],[\"static-attr\",\"data-dropdown\",\"ca2hdj-dropdown\"],[\"static-attr\",\"data-auto-focus\",\"true\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"data-yeti-box\",\"notf-dropdown\"],[\"static-attr\",\"data-resize\",\"notf-dropdown\"],[\"static-attr\",\"aria-labelledby\",\"diuv8e-dd-anchor\"],[\"static-attr\",\"data-events\",\"resize\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"menu vertical dropdown dropdown-wrap\"],[\"flush-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-dropdown-nest\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"label round bg-blue\"],[\"flush-element\"],[\"text\",\"ALERT\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-black\"],[\"flush-element\"],[\"text\",\"Sticky Very Important\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-red fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-black\"],[\"flush-element\"],[\"text\",\"1 minute ago\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slimScrollDiv\"],[\"static-attr\",\"style\",\"position: relative; overflow: hidden; width: auto; height: 180px;\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slim-scroll\"],[\"static-attr\",\"style\",\"overflow: hidden; width: auto; height: 180px;\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-comments-smiley\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Announcements \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-green fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Just Now !\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"  fontello-attach-1\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Complete your profile\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-yellow fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"2 Minute Ago\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"  fontello-calendar-1\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"New Schedule Realease\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-yellow fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"30 Minute ago\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fontello-database-1\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"New Student Data\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-orange fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"1 Hour ago\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fontello-graduation-cap\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Graduate Student List\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fontello-record\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"2 Days ago\"],[\"close-element\"],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slimScrollBar\"],[\"static-attr\",\"style\",\"background: rgb(0, 0, 0); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 108px;\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"slimScrollRail\"],[\"static-attr\",\"style\",\"width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"comment\",\"end of NOTIFICATION\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"active right\"],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"label bg-white\"],[\"flush-element\"],[\"text\",\"More...\"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"bg-white\"],[\"static-attr\",\"role\",\"menuitem\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"bg-white\"],[\"static-attr\",\"data-toggle\",\"offCanvas\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"static-attr\",\"aria-controls\",\"offCanvas\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\" text-black ti-menu\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"comment\",\" Right Nav Section \"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"comment\",\" end of Top Nav \"],[\"text\",\"\\n                        \"],[\"comment\",\" breadcrumbs \"],[\"text\",\"\\n                        \"],[\"comment\",\"    <ul class=\\\"breadcrumbs\\\">\\n                        <li><a href=\\\"javascript:void(0)\\\"><span class=\\\"entypo-home\\\"></span></a> </li>\\n                        <li>Dashboard </li>\\n                  </ul>\"],[\"text\",\"\\n                        \"],[\"comment\",\" end of breadcrumbs \"],[\"text\",\"\\n                        \"],[\"comment\",\" Container Begin \"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-main-fondamix\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"comment\",\" Begin page content \"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n\\n                        \"],[\"comment\",\" Widget  \"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"yield\",\"default\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"comment\",\" End of Widget  \"],[\"text\",\"\\n                        \"],[\"open-element\",\"footer\",[]],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"footer\"],[\"flush-element\"],[\"text\",\"Copyright © 2017 \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://themeforest.net/user/Themesmile\"],[\"flush-element\"],[\"text\",\"Themesmile\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"comment\",\" End of Container Begin \"],[\"text\",\"\\n                    \"],[\"comment\",\" Right Menu \"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bg-transparent off-canvas position-right\"],[\"static-attr\",\"id\",\"offCanvas\"],[\"static-attr\",\"data-off-canvas\",\"ly4p6q-off-canvas\"],[\"static-attr\",\"data-position\",\"right\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"comment\",\" Close button \"],[\"text\",\"\\n                        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"close-button\"],[\"static-attr\",\"aria-label\",\"Close menu\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"data-close\",\"\"],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"off-canvas-content\"],[\"static-attr\",\"data-off-canvas-content\",\"\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"comment\",\" Menu \"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-stacked \"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Black-100 bg ti-menu-alt\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Notifications\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Deep-Purple-100 bg ti-menu-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-more-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Deep-Purple-200 bg ti-shopping-cart-full\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-more-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Deep-Purple-400 bg ti-gift\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-more-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Deep-Purple-600 bg ti-truck\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-more-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Deep-Purple-800 bg ti-home\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Shipping proses of \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Robert Langdon\"],[\"close-element\"],[\"text\",\" is completed!\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"1m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Blue-A100 bg ti-user\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Meet new user \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Lilian Meirs\"],[\"close-element\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"23m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Red-A400 bg ti-cloud-down\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Robert\"],[\"close-element\"],[\"text\",\" added new request for ne item for refund\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"34m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Orange-200 bg ti-menu-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-more-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Orange-400 bg ti-shopping-cart-full\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"ti-more-alt\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Orange-600 bg ti-gift\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"Shipping proses of \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Robert Langdon\"],[\"close-element\"],[\"text\",\" is completed!\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"40m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Amber-500 bg ti-comment-alt\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Mike Nilson commented Post\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\nLike this one! Keep going!\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"50m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Cyan-300 bg ti-shopping-cart-full\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Amazing! \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Mike Nilson\"],[\"close-element\"],[\"text\",\" just purchased Your item \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"1h\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Light-Green-500 bg ti-image\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Lilian Meirs\"],[\"close-element\"],[\"text\",\" Posting new image cover, and just got 2.000 likes\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"alt\",\"\"],[\"static-attr\",\"src\",\"img/500x200\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"1h 12m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Amber-500 bg ti-comment-alt\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Mike Nilson commented Post\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\nLike this one! Keep going!\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"1h 39\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Cyan-300 bg ti-shopping-cart-full\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Amazing! \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Mike Nilson\"],[\"close-element\"],[\"text\",\" just purchased Your item\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"alt\",\"\"],[\"static-attr\",\"src\",\"img/500x200(1)\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"1h 45m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Cyan-300 bg ti-shopping-cart-full\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Amazing! \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"Mike Nilson\"],[\"close-element\"],[\"text\",\" just purchased Your item \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"23m\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"javascript:void(0)\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"palette-Amber-500 bg ti-comment-alt\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Mike Nilson commented Post\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\nLike this one! Keep going!\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"2h\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"js-off-canvas-exit\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"comment\",\" End of Right Menu \"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"comment\",\" end paper bg \"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\" end of off-canvas-wrap \"],[\"text\",\"\\n        \"],[\"comment\",\" end of inner-wrap \"],[\"text\",\"\\n        \"],[\"comment\",\" main javascript library \"],[\"text\",\"\\n\\n\\n\\n        \"],[\"comment\",\" foundation javascript \"],[\"text\",\"\\n\\n\\n        \"],[\"comment\",\" main edumix javascript \"],[\"text\",\"\\n\\n\\n        \"],[\"open-element\",\"script\",[]],[\"static-attr\",\"type\",\"text/javascript\"],[\"static-attr\",\"src\",\"js/sliding-menu.js\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\n        \"],[\"open-element\",\"script\",[]],[\"static-attr\",\"type\",\"text/javascript\"],[\"static-attr\",\"src\",\"js/jquery.circliful.js\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"script\",[]],[\"static-attr\",\"type\",\"text/javascript\"],[\"static-attr\",\"src\",\"js/app.js\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\" additional javascript \"],[\"text\",\"\\n\\n\\n\\n\\n\\n        \"],[\"open-element\",\"script\",[]],[\"flush-element\"],[\"text\",\"\\n            $(document).foundation();\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tooltip-inner\"],[\"static-attr\",\"id\",\"line-chart-tooltip\"],[\"static-attr\",\"style\",\"position: absolute; background: rgb(51, 51, 51); padding: 3px 10px; color: rgb(255, 255, 255); display: none; opacity: 1;\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"mi-site/templates/components/dashboard-template.hbs"}});});
define("mi-site/templates/components/table-filter", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "21GeNgbP", "block": "{\"statements\":[[\"text\",\"\\nasd\\n\\n\\n \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"ui fluid large teal submit button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"prueba\"]],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "mi-site/templates/components/table-filter.hbs" } });
});
define("mi-site/templates/list-serie", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QfUBKpIU", "block": "{\"statements\":[[\"block\",[\"dashboard-template\"],null,null,0],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\\n\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "mi-site/templates/list-serie.hbs" } });
});
define("mi-site/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0/p44yeR", "block": "{\"statements\":[[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"logionErrorMsg\"]]],null,0],[\"text\",\"\\n\\n\\n \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row \"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"large-6 columns large-centered\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"signup-panel\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"welcome\"],[\"flush-element\"],[\"text\",\" Welcome to this awesome app!\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row collapse\"],[\"flush-element\"],[\"text\",\"\\n          \\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"small-12  columns large-centered \"],[\"flush-element\"],[\"text\",\"\\n              \\n\\t\\t\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"E-mail address\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n         \\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row collapse\"],[\"flush-element\"],[\"text\",\"\\n           \\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"small-12 columns \"],[\"flush-element\"],[\"text\",\"\\n             \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"placeholder\",\"value\"],[\"password\",\"Password\",[\"get\",[\"myPassword\"]]]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"ui fluid large teal submit button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signIn\"]],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\"\\n         \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Already have an account? \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Login here &raquo\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n   \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert callout\"],[\"static-attr\",\"id\",\"msg-login-erro\"],[\"static-attr\",\"data-closable\",\"\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"logionErrorMsg\"]],false],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"close-button\"],[\"static-attr\",\"aria-label\",\"Dismiss alert\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"data-close\",\"\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "mi-site/templates/login.hbs" } });
});
define("mi-site/templates/new-serie", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Z4+FrzL6", "block": "{\"statements\":[[\"block\",[\"table-filter\"],null,null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "mi-site/templates/new-serie.hbs" } });
});
define("mi-site/templates/welcome", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "em7Ifpzl", "block": "{\"statements\":[[\"text\",\"\\n\\n\"],[\"block\",[\"dashboard-template\"],null,null,0],[\"text\",\"\\n\\n \\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    este es el\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "mi-site/templates/welcome.hbs" } });
});
define('mi-site/torii-adapters/application', ['exports', 'emberfire/torii-adapters/firebase'], function (exports, _emberfireToriiAdaptersFirebase) {
  exports['default'] = _emberfireToriiAdaptersFirebase['default'].extend({});
});
define('mi-site/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('mi-site/config/environment', ['ember'], function(Ember) {
  var prefix = 'mi-site';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("mi-site/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"mi-site","version":"0.0.0+3d3bcd01"});
}

/* jshint ignore:end */
//# sourceMappingURL=mi-site.map
