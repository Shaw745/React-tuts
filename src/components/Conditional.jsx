import React from 'react'

const Conditional = () => {
    const isLoading = false;
    const isSubmitting = false;
    const isError = true;
    if (isLoading) {
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <h1>Main Content</h1>
        <button className='mybtn'>{isSubmitting ? "Submitting...":"Submit"}</button>
        {isError && <h1>Error Loading page,try again</h1> }

    </div>
  )
}

export default Conditional