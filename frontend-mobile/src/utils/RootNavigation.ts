// RootNavigation.js

import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: Object = {}) {
  navigationRef.current?.navigate(name, params);
}

export function reset(route: string) {
  navigationRef.current?.reset({ routes: [{ name: route }], index: 0 });
}