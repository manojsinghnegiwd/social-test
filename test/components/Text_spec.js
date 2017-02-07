import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {expect} from 'chai';
import Text from '../../src/components/Text';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = TestUtils;

describe('App', () => {
	it('renders text', () => {
		const text = 'Some text';
		const component = renderIntoDocument(
			<Text message={text} />
		);

		const heading = scryRenderedDOMComponentsWithTag(component, 'h1');
		expect(heading[0].textContent).to.contain('Some text');
	});

	it('invokes a callback when the text is clicked', () => {
		const text = 'Some text';
		let color = 'black';
		const changeColor = () => color = 'red';
		const component = renderIntoDocument(
			<Text text={text} changeColor={changeColor} />
		);

		const heading = component.refs.text;
		Simulate.click(heading);

		expect(color).to.equal('red');
	});
});