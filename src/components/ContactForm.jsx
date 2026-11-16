import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, FileSpreadsheet, X, Send } from 'lucide-react';

export default function ContactForm({
  formType = 'general', // 'general' | 'buy' | 'sell' | 'quote'
  title = 'Sales | Purchasing | Technical Support | General Inquiries',
  hasFileUpload = false,
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (selectedFile) => {
    if (!selectedFile) return;

    const allowedExtensions = ['.xlsx', '.xls', '.csv'];
    const fileExt = '.' + selectedFile.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExt)) {
      setErrors((prev) => ({
        ...prev,
        file: 'Invalid file type. Please upload an Excel or CSV file (.xlsx, .xls, .csv)',
      }));
      return;
    }

    if (selectedFile.size > 15 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        file: 'File size exceeds 15MB limit.',
      }));
      return;
    }

    setErrors((prev) => ({ ...prev, file: null }));
    setFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    validateAndSetFile(droppedFile);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulated API submission with clear integration endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      console.log('Form submission payload:', {
        type: formType,
        ...formData,
        fileName: file ? file.name : null,
        recipient: 'sales@dodecaa.com',
        timestamp: new Date().toISOString(),
      });
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      website: '',
      company: '',
      message: '',
    });
    setFile(null);
    setErrors({});
    setSubmitStatus(null);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10">
      {title && (
        <h3 className="text-xl sm:text-2xl font-bold text-[#00114F] mb-6">
          {title}
        </h3>
      )}

      {submitStatus === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
            <CheckCircle2 size={36} />
          </div>
          <h4 className="text-2xl font-bold text-green-900">
            Thank you! Your request has been sent.
          </h4>
          <p className="text-sm text-green-800 max-w-md mx-auto">
            Our enterprise procurement and sales team at Dodecaa will review your submission and contact you within 24–48 hours at{' '}
            <span className="font-semibold">{formData.email}</span>.
          </p>
          <button
            onClick={resetForm}
            className="mt-4 px-6 py-2.5 rounded-lg bg-[#0287CC] text-white text-sm font-semibold hover:bg-[#00114F] transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-hidden transition-all ${
                errors.fullName
                  ? 'border-red-500 bg-red-50/30'
                  : 'border-gray-300 focus:border-[#0287CC] focus:ring-1 focus:ring-[#0287CC]'
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-hidden transition-all ${
                  errors.email
                    ? 'border-red-500 bg-red-50/30'
                    : 'border-gray-300 focus:border-[#0287CC] focus:ring-1 focus:ring-[#0287CC]'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-hidden transition-all ${
                  errors.phone
                    ? 'border-red-500 bg-red-50/30'
                    : 'border-gray-300 focus:border-[#0287CC] focus:ring-1 focus:ring-[#0287CC]'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Website & Company Name Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Website
              </label>
              <input
                type="url"
                name="website"
                placeholder="Website (e.g. https://yourcompany.com)"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-hidden focus:border-[#0287CC] focus:ring-1 focus:ring-[#0287CC]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-hidden focus:border-[#0287CC] focus:ring-1 focus:ring-[#0287CC]"
              />
            </div>
          </div>

          {/* Optional File Upload (Buy / Sell Pages) */}
          {hasFileUpload && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Select the file (xlsx/xls/csv) you would like to send:
              </label>

              {!file ? (
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-gray-300 hover:border-[#0287CC] rounded-xl p-6 text-center cursor-pointer bg-gray-50/60 hover:bg-[#F0F5FA] transition-colors relative"
                >
                  <input
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center pointer-events-none">
                    <Upload size={28} className="text-[#0287CC] mb-2" />
                    <span className="text-sm font-semibold text-[#00114F]">
                      Upload File
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      Drag & drop your inventory list, or click to browse (.xlsx, .xls, .csv, max 15MB)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3.5 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet size={24} className="text-[#0287CC]" />
                    <div>
                      <p className="text-sm font-semibold text-[#00114F] truncate max-w-xs">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-white transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {errors.file && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.file}
                </p>
              )}
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-hidden focus:border-[#0287CC] focus:ring-1 focus:ring-[#0287CC]"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[200px] btn-dodecaa font-semibold px-8 py-3.5 rounded-lg text-base tracking-wide flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
