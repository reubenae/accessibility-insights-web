// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Enzyme from 'enzyme';
import * as React from 'react';

import { ManualTestStatus } from '../../../../../common/types/manual-test-status';
import { StatusIcon } from '../../../../../DetailsView/components/status-icon';

describe('StatusIcon', () => {
    test('render for PASS', () => {
        const wrapper = Enzyme.shallow(<StatusIcon status={ManualTestStatus.PASS} />);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    test('render for PASS with extra class name', () => {
        const wrapper = Enzyme.shallow(<StatusIcon status={ManualTestStatus.PASS} className={'test'} />);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    test('render for FAIL', () => {
        const wrapper = Enzyme.shallow(<StatusIcon status={ManualTestStatus.FAIL} />);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    test('render for UNKNOWN', () => {
        const wrapper = Enzyme.shallow(<StatusIcon status={ManualTestStatus.UNKNOWN} />);
        expect(wrapper.getElement()).toMatchSnapshot();
    });

    test('render for default', () => {
        const status: ManualTestStatus = -1 as ManualTestStatus;
        const wrapper = Enzyme.shallow(<StatusIcon status={status} />);
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
