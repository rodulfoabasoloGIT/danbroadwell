import React,{useRef, useState} from 'react'
import {Link} from 'gatsby';
import  Logo from '../../static/logo/kj1.png'

const Nav = (props) =>{
	


	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

	const pages = [
		 'Home',
		 'About-the-Author', 
		 'About-the-Book', 
		 'Contact'
	]	


	console.log(pages);

	let Listed = pages.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : `/${newUrl}`;

		console.log(filterUrl);

		return (
			<li>
				<Link 
					to={filterUrl}>
					{e.replace(/[-/]/g," ").trim()}
				</Link>	
			</li>
		)
	})


	const clickEvent = (e)=> {
		setToggled(!toggled);
	}
			
    return(		
        <>
			<nav className="navigation"
				style={props.pathExt === '/' || props.pathExt === ''  ? {
						borderBottom: '1px solid rgb(255, 247, 232)'
					}:{
						borderBottom: '1px solid rgb(255, 247, 232)'
						}
					}
				>

				<h1>
					<Link 
						style={props.pathExt === '/' 
						 	|| props.pathExt === '' ? {
							color: 'rgb(255, 202, 0)'
						}:{
							color: '#000'
						}}
						to="/">
							
						<img className="logo-img" src={Logo} alt="logo"/>
					</Link>
				</h1>
{/* 
				<h1 className="wn-author-name"><Link to="/">Kristi Falk & Dr. Daniel Falk</Link></h1> */}

				<ul
					className="hamburger-ul"
					onClick={e => clickEvent(e)}
					ref={refSpan}>
					<span className="hamburger-span"></span>
					<span className="hamburger-span"></span>
				</ul>

				<section className={toggled ? 'active-nav': 'non-active-nav'}>

					<span className="close-mark" onClick={e => clickEvent(e)}>
						<span className="hamburger-x-mark"></span>
						<span className="hamburger-x-mark"></span>
					</span>

					<ul>
					<p class="list-label">Navigations.</p>
						{
							Listed
						}

					</ul>
				</section>

			<ul className="navul">

				<Link to='/'>
					<li>
						Home
					</li>
				</Link>
					
			 	<Link to='/about-the-book'>
					<li>
						About the Book
					</li>
			 	</Link>
				
				<Link to='/about-the-author'>
					<li>
						About the Author
					</li>
				</Link>

				<Link to='/contact'>
					<li>
						Contact
					</li>	
				</Link>
				
				</ul>
	
			</nav>
        </>			
    )
}

export default Nav;