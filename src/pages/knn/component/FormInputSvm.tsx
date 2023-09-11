import { KknRequestEntity } from 'entities/kkn.entity';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import KnnUseCase from 'use-case/knn';
import SettingUseCase from 'use-case/setting.use-case';

function FormInputKnn() {
    const router = useRouter();
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const { createKnn } = KnnUseCase();
    const { setLoading } = SettingUseCase();
    const [form, setForm] = useState<KknRequestEntity>({
        nama: "",
        gender: "",
        usia: "",
        berat: "",
        tinggi: "",
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

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (form.nama == "" || form.usia == "" || form.gender == "" || form.berat == "" || form.tinggi == "") {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [form.nama, form.usia, form.gender, form.tinggi]);


    return (
        <Form>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Nama</Form.Label>
                <Form.Control style={{
                    maxWidth: "80%"
                }}
                    onChange={onChange}
                    value={form.nama}
                    name="nama"
                    type="Text"
                    placeholder="Masukan Nama" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Jenis Kelamin</Form.Label>
                <Form.Select
                    style={{
                        maxWidth: "80%"
                    }}
                    aria-label="Default select example"
                    name="gender"
                    onChange={handleChange}
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
                    value={form.usia}
                    onChange={onChange}
                    name="usia"
                    placeholder="Masukan Usia" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Berat</Form.Label>
                <Form.Control style={{
                    maxWidth: "80%"
                }} type="Text"
                    value={form.berat}
                    onChange={onChange}
                    name="berat"
                    placeholder="Masukan Berat" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "8px", fontWeight: "bold" }}>Tinggi</Form.Label>
                <Form.Control style={{
                    maxWidth: "80%"
                }} type="Text"
                    value={form.tinggi}
                    onChange={onChange}
                    name="tinggi"
                    placeholder="Masukan Tinggi" />
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
                    onClick={() => createKnn(form)}
                    variant="success"
                    disabled={disableButton}
                    style={{
                        width: "300px"
                    }}>Simpan</Button>
            </div>
        </Form>
    );
}

export default FormInputKnn;