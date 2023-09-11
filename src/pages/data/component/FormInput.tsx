import { DataTraingingRequestEntity } from 'entities/dataTraingin.entity';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DataTrainingUseCase from 'use-case/dataTraining-use-case';
import SettingUseCase from 'use-case/setting.use-case';

function FormInput() {
    const router = useRouter();
    const [disableButton, setDisableButton] = useState<boolean>(false)
    const { setLoading } = SettingUseCase();
    const { createDataTraining } = DataTrainingUseCase()
    const [form, setForm] = useState<DataTraingingRequestEntity>({
        nama: "",
        gender: "",
        usia: "",
        berat: "",
        tinggi: "",
        klasifikasi: ""
    });

    const replaceBerat = (value: string) => {
        return value.replace(",", ".");
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.name === "berat" ? replaceBerat(e.target.value) :
                e.target.name === "tinggi" ? replaceBerat(e.target.value) :
                    e.target.value
        })
    }

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (form.nama == "" || form.usia == "" || form.gender == "" || form.berat == "" || form.tinggi == "" || form.klasifikasi == "") {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [form.nama, form.usia, form.gender, form.tinggi, form.klasifikasi]);



    return (
        <Form>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Nama</Form.Label>
                <Form.Control style={{
                    maxWidth: "80%"
                }} type="Text"
                    name="nama"
                    onChange={onChange}
                    value={form.nama}
                    placeholder="Masukan Nama" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Jenis Kelamin</Form.Label>
                <Form.Select style={{
                    maxWidth: "80%"
                }} aria-label="Default select example"
                    name="gender"
                    value={form.gender}
                    onChange={onChangeSelect}
                >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="L">L</option>
                    <option value="P">P</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Usia</Form.Label>
                <Form.Control style={{
                    maxWidth: "80%"
                }} type="Text"
                    placeholder="Masukan Usia"
                    name="usia"
                    onChange={onChange}
                    value={form.usia}
                />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Berat</Form.Label>
                <Form.Control style={{
                    maxWidth: "80%"
                }} type="Text" placeholder="Masukan Berat"
                    name="berat"
                    onChange={onChange}
                    value={form.berat}
                />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Tinggi</Form.Label>
                <Form.Control style={{
                    maxWidth: "80%"
                }} type="Text" placeholder="Masukan Tinggi"
                    name="tinggi"
                    onChange={onChange}
                    value={form.tinggi}
                />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Klasifikasi</Form.Label>
                <Form.Select style={{
                    maxWidth: "80%"
                }}
                    name="klasifikasi"
                    onChange={onChangeSelect}
                    value={form.klasifikasi}
                    aria-label="Default select example">
                    <option value="">Pilih Gizi</option>
                    <option value="Gizi Baik">Gizi Baik</option>
                    <option value="Gizi Lebih">Gizi Lebih</option>
                    <option value="Gizi Kurang">Gizi Kurang</option>
                </Form.Select>
            </Form.Group>
            <div className='d-flex justify-content-between' style={{ marginTop: "100px" }}>
                <Button variant="danger" style={{
                    width: "300px"
                }}
                    onClick={() => {
                        setLoading(true)
                        router.back()
                    }}
                >Kembali</Button>
                <Button
                    variant="success"
                    disabled={disableButton}
                    onClick={() => createDataTraining(form)}
                    style={{
                        width: "300px"
                    }}>Simpan</Button>
            </div>
        </Form>
    );
}

export default FormInput;