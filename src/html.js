import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
	let wait = true;
	const pixelcode = (wait) => {
		if (wait === true) {
			console.log('wait');
			return;
		} else {
			let f = window;
			let b = document;
			let e = 'script';
			let v = 'https://connect.facebook.net/en_US/fbevents.js';
			if (f.fbq) return;
			n = f.fbq = function() {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
			fbq('init', '434709127166530');
			fbq('track', 'PageView');
		}
	};

	useEffect(() => {
		wait = false;
	});

	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				{props.headComponents}
				<script src={pixelcode(wait)} />
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}

				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: 'none' }}
						src="https://www.facebook.com/tr?id=434709127166530&ev=PageView&noscript=1"
					/>
				</noscript>

				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
				</noscript>
				<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array
};
