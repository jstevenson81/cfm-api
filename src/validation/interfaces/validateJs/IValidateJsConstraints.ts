interface IPresenceConstraint {
    allowEmpty: boolean;
    message?: string;
};

interface INumericalityConstraint {
  noStrings: boolean;
  onlyInteger?: boolean;
  strict?: boolean;
  greaterThan?: number;
  greaterThanOrEqualTo?: number;
  equalTo?: number;
  notEqualTo?: number;
  lessThan?: number;
  lessThanOrEqualTo?: number;
  divisibleBy?: number;
  odd?: boolean;
  even?: boolean;
  message?: string;
};

interface IFormatConstraint {
  pattern: RegExp;
  message?: string;
}

interface IUrlConstraint {
  schemes: Array<Scheme>
  message?: string;
}

enum Scheme {
  http = 'http',
  https = 'https',
  ftp = 'ftp',
  ftps = 'ftps'
}

export { IPresenceConstraint, INumericalityConstraint, IFormatConstraint, IUrlConstraint, Scheme };
