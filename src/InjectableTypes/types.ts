import 'reflect-metadata'

interface IRegistryTypes {
  [name: string]: symbol;
}

const TYPES : IRegistryTypes = {
  // ISomeType: Symbol('ISomeType'),
}

export default TYPES
