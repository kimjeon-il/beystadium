const handlers = Object.create(null);

const missingService = name => {
  throw new Error(`App service is not registered: ${String(name)}`);
};

const appServices = new Proxy(handlers, {
  get(target, property) {
    if (property in target) return target[property];
    return (..._args) => missingService(property);
  }
});

const registerAppServices = services => Object.assign(handlers, services);

export { appServices, registerAppServices };
