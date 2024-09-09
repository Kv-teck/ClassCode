import { useState } from 'react';
import '../assets/css/Fan.css'

const Fan = () => {
    const [form, setForm] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        improvement: '',
        name: '',
        date: '',
    });

    // Hàm xử lý khi người dùng thay đổi nội dung trong form
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Hàm xử lý khi người dùng submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form đã gửi thành công!');
    };
    return (
        <>
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Fan</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Fan</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container mt-5">
                <div className="card p-4 shadow-sm">
                    <h1 className="text-center">Customer Survey</h1>
                    <p className="text-center">Thank you for shopping with us! Please take a few minutes to rate us so we can serve you better.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="table-responsive">
                            <table className="table table-bordered text-center">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Very Bad</th>
                                        <th scope="col">Bad</th>
                                        <th scope="col">Neutral</th>
                                        <th scope="col">Good</th>
                                        <th scope="col">Excellent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lựa chọn: {form.q1}</td>
                                        <td><input type="radio" name="q1" value="Very Bad" onChange={handleInputChange} checked={form.q1 === 'Very Bad'} required /></td>
                                        <td><input type="radio" name="q1" value="Bad" onChange={handleInputChange} checked={form.q1 === 'Bad'} required /></td>
                                        <td><input type="radio" name="q1" value="Neutral" onChange={handleInputChange} checked={form.q1 === 'Neutral'} required /></td>
                                        <td><input type="radio" name="q1" value="Good" onChange={handleInputChange} checked={form.q1 === 'Good'} required /></td>
                                        <td><input type="radio" name="q1" value="Excellent" onChange={handleInputChange} checked={form.q1 === 'Excellent'} required /></td>
                                    </tr>
                                    <tr>
                                        <td>Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lựa chọn: {form.q2}</td>
                                        <td><input type="radio" name="q2" value="Very Bad" onChange={handleInputChange} checked={form.q2 === 'Very Bad'} required /></td>
                                        <td><input type="radio" name="q2" value="Bad" onChange={handleInputChange} checked={form.q2 === 'Bad'} required /></td>
                                        <td><input type="radio" name="q2" value="Neutral" onChange={handleInputChange} checked={form.q2 === 'Neutral'} required /></td>
                                        <td><input type="radio" name="q2" value="Good" onChange={handleInputChange} checked={form.q2 === 'Good'} required /></td>
                                        <td><input type="radio" name="q2" value="Excellent" onChange={handleInputChange} checked={form.q2 === 'Excellent'} required /></td>
                                    </tr>
                                    <tr>
                                        <td>Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lựa chọn: {form.q3}</td>
                                        <td><input type="radio" name="q3" value="Very Bad" onChange={handleInputChange} checked={form.q3 === 'Very Bad'} required /></td>
                                        <td><input type="radio" name="q3" value="Bad" onChange={handleInputChange} checked={form.q3 === 'Bad'} required /></td>
                                        <td><input type="radio" name="q3" value="Neutral" onChange={handleInputChange} checked={form.q3 === 'Neutral'} required /></td>
                                        <td><input type="radio" name="q3" value="Good" onChange={handleInputChange} checked={form.q3 === 'Good'} required /></td>
                                        <td><input type="radio" name="q3" value="Excellent" onChange={handleInputChange} checked={form.q3 === 'Excellent'} required /></td>
                                    </tr>
                                    <tr>
                                        <td>Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lựa chọn: {form.q4}</td>
                                        <td><input type="radio" name="q4" value="Very Bad" onChange={handleInputChange} checked={form.q4 === 'Very Bad'} required /></td>
                                        <td><input type="radio" name="q4" value="Bad" onChange={handleInputChange} checked={form.q4 === 'Bad'} required /></td>
                                        <td><input type="radio" name="q4" value="Neutral" onChange={handleInputChange} checked={form.q4 === 'Neutral'} required /></td>
                                        <td><input type="radio" name="q4" value="Good" onChange={handleInputChange} checked={form.q4 === 'Good'} required /></td>
                                        <td><input type="radio" name="q4" value="Excellent" onChange={handleInputChange} checked={form.q4 === 'Excellent'} required /></td>
                                    </tr>
                                    <tr>
                                        <td>Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lựa chọn: {form.q5}</td>
                                        <td><input type="radio" name="q5" value="Very Bad" onChange={handleInputChange} checked={form.q5 === 'Very Bad'} required /></td>
                                        <td><input type="radio" name="q5" value="Bad" onChange={handleInputChange} checked={form.q5 === 'Bad'} required /></td>
                                        <td><input type="radio" name="q5" value="Neutral" onChange={handleInputChange} checked={form.q5 === 'Neutral'} required /></td>
                                        <td><input type="radio" name="q5" value="Good" onChange={handleInputChange} checked={form.q5 === 'Good'} required /></td>
                                        <td><input type="radio" name="q5" value="Excellent" onChange={handleInputChange} checked={form.q5 === 'Excellent'} required /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mb-3">
                            <label for="improvement" className="form-label">How else can we improve? </label>
                            <p>{form.improvement}</p>
                            <textarea id="improvement" name="improvement" className="form-control" value={form.improvement} onChange={handleInputChange} rows="4"></textarea>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="name" className="form-label">Your Name: {form.name}</label>
                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" value={form.name} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="date" className="form-label">Date: {form.date}</label>
                                <input type="date" id="date" name="date" className="form-control" value={form.date} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Fan;