import React from 'react'

const Contact = () => {
  return (
    <section className="bg-dark text-light py-5">
        <div className="container">
            <h2 className="text-center">Contact</h2>
            <form className="mt-4">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder="Your Name" required></input>
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" required></input>
                    </div>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact