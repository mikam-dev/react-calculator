import React, { useState } from 'react'

function Calculator() {
	const [display, setDisplay] = useState([])
	const [result, setResult] = useState(0)

	const calc = e => {
		const res = eval(e)
		return res
	}

	return (
		<div className='col'>
			<code readOnly className='row calc-result' value={result}>
				{result}
			</code>
			<code className='row calc-display' value={display}>
				{display}
			</code>
			<div className='row calc'>
				<div className='col'>
					<div className='row'>
						<button
							className='calc-btn'
							value={'7'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							7
						</button>
						<button
							className='calc-btn'
							value={'8'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							8
						</button>
						<button
							className='calc-btn'
							value={'9'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							9
						</button>
						<button
							className='calc-btn'
							value={'/'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							/
						</button>
					</div>

					<div className='row'>
						<button
							className='calc-btn'
							value={'4'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							4
						</button>
						<button
							className='calc-btn'
							value={'5'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							5
						</button>
						<button
							className='calc-btn'
							value={'6'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							6
						</button>
						<button
							className='calc-btn'
							value={'*'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							*
						</button>
					</div>

					<div className='row'>
						<button
							className='calc-btn'
							value={'1'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							1
						</button>
						<button
							className='calc-btn'
							value={'2'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							2
						</button>
						<button
							className='calc-btn'
							value={'3'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							3
						</button>
						<button
							className='calc-btn'
							value={'-'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							-
						</button>
					</div>

					<div className='row'>
						<button
							className='calc-btn'
							onClick={e => {
								setDisplay([])
								setResult(0)
							}}
						>
							Clear
						</button>
						<button
							className='calc-btn'
							value={0}
							onClick={e => setDisplay(display + e.target.value)}
						>
							0
						</button>
						<button
							className='calc-btn'
							onMouseDown={() => {
								setResult(calc(display))
							}}
							onMouseUp={() => {
								setDisplay(result)
							}}
						>
							=
						</button>
						<button
							className='calc-btn'
							value={'+'}
							onClick={e => setDisplay(display + e.target.value)}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Calculator
