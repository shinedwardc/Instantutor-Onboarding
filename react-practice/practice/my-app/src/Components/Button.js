import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    // const onClick = (e) => {
    //     console.log(e)

    //     /* Passing the event object into the log to record where it is. */
    // }


  return (
    <button onClick={onClick} style={{ backgroundColor: color}} 
    className='btn' >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button