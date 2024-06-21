import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='contact-info'>
					<h3>Контакты</h3>
					<p>
						Адрес офиса: ул. Лиговский пр-кт, 140, г. Санкт-Петербург, Россия
					</p>
					<p>
						Email службы поддержки:{' '}
						<a href='mailto:support@example.com'>popa_suslika_a_ne@elbrus.ru</a>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
