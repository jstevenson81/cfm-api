import {
  INumericalityConstraint,
  IPresenceConstraint,
  IFormatConstraint,
  IUrlConstraint
} from '../../validation.index'

export interface IMomConstraints {
  year: { presence: IPresenceConstraint; numericality: INumericalityConstraint };
  month: { presence: IPresenceConstraint; format: IFormatConstraint };
  title: { presence: IPresenceConstraint };
  pictureUrl: { presence: IPresenceConstraint; url: IUrlConstraint };
};