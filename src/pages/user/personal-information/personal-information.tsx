import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col, Typography, Button, Form, Input, DatePicker, Select, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useAppSelector } from 'config/hooks';
import { useNavigate } from 'react-router-dom';
import { ROLE } from 'utils/constants/role.constaint';

enum AddressTypeEnum {
    Mailing = 'Mailing',
    Work = 'Work',
}

enum ContactTypeEnum {
    Work = 'Work',
    Personal = 'Personal',
}

const PersonalInformation = () => {
    const currentUser = useAppSelector((state) => state.user.user);
    const [editMode, setEditMode] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser) {
            form.setFieldsValue({
                first_name: currentUser.first_name,
                last_name: currentUser.last_name,
                middle_name: currentUser.middle_name,
                birthday: currentUser.birthday ? moment(currentUser.birthday) : null,
                address: currentUser.address,
                email: currentUser.email,
                phone_number: currentUser.phone,
                country: currentUser.country,
                city: currentUser.city,
                organization: currentUser.organization,
                role: currentUser.role,
                department: currentUser.department,
                zip_code: currentUser.zip_code,
            });
        }
    }, [currentUser, form]);

    const handleSubmit = () => {
        form.validateFields().then(values => {
            console.log('Submitted values:', values);
            // Dispatch update action here
            setEditMode(false);
        }).catch(errorInfo => {
            console.log('Validation failed:', errorInfo);
        });
    };

    const handleClickKYC = () => {
        navigate(`/pages/user/${currentUser?.id}/kyc/`)
    }
    if (!currentUser) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <div className="mb-4 col-span-full xl:mb-2">
                <nav className="flex mb-5" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                        <li className="inline-flex items-center">
                            <a href="#"
                                className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001-1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <a href="#"
                                    className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Users</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                                    aria-current="page">Personal Information</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Personal Information</h1>
            </div>
            <div
                className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold dark:text-white">General information</h3>
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <fieldset disabled={!editMode}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="First Name"
                                    name="first_name"
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Last Name"
                                    name="last_name"
                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                >
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Country"
                                    name="country"
                                    rules={[{ required: true, message: 'Please input your country!' }]}
                                >
                                    <Input placeholder="Country" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="City"
                                    name="city"
                                    rules={[{ required: true, message: 'Please input your city!' }]}
                                >
                                    <Input placeholder="City" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[{ required: true, message: 'Please input your address!' }]}
                                >
                                    <Input placeholder="Address" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Phone Number"
                                    name="phone_number"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input placeholder="Phone Number" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6
 sm:col-span-3">
                                <Form.Item
                                    label="Birthday"
                                    name="birthday"
                                    rules={[{ required: true, message: 'Please input your birthday!' }]}
                                >
                                    <DatePicker style={{ width: '100%' }} />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Organization"
                                    name="organization"
                                    rules={[{ required: true, message: 'Please input your organization!' }]}
                                >
                                    <Input placeholder="Organization" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Role"
                                    name="role"
                                    rules={[{ required: true, message: 'Please input your role!' }]}
                                >
                                    <Input placeholder="Role" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Department"
                                    name="department"
                                    rules={[{ required: true, message: 'Please input your department!' }]}
                                >
                                    <Input placeholder="Department" />
                                </Form.Item>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Form.Item
                                    label="Zip/Postal Code"
                                    name="zip_code"
                                    rules={[{ required: true, message: 'Please input your zip/postal code!' }]}
                                >
                                    <Input placeholder="Zip/Postal Code" />
                                </Form.Item>
                            </div>

                        </div>
                    </fieldset>
                    <div className="col-span-6 sm:col-full">
                        {!editMode ? (
                            <>
                                {

                                    currentUser?.role !== ROLE.OFFICER && (
                                        <Button
                                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            onClick={() => setEditMode(true)}
                                        >
                                            Edit
                                        </Button>
                                    )
                                }
                                <Button
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={() => setEditMode(true)}
                                >
                                    KYC
                                </Button>
                            </>


                        ) : (
                            <>
                                {
                                    <Button
                                        type="primary"
                                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Save
                                    </Button>
                                }
                                <Button
                                    className="ml-2"
                                    onClick={() => {
                                        // form.resetFields();
                                        setEditMode(false);
                                    }}
                                >
                                    Cancel
                                </Button>
                            </>
                        )}
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default PersonalInformation;
