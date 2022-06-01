import React from 'react'

export default function Menu({ items }) {
    return (
        <>
            {items.map((menuItem) => {
                const { id, title, descr, price, img } = menuItem;
                return (
                    <div key={id} className="card mb-3 col-lg-6 border-0" >
                        <div className='card'>
                            <div className="row g-0">
                                <div className="img-box col-md-4">
                                    {/* <img src={img} className="img-fluid rounded-start" alt={title} /> */}
                                    <img src={img} className="img-fluid rounded-start" alt={title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <span className="badge text-bg-warning">{price}$</span>
                                        <p className="card-text"><small className="text-muted">{descr}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}