import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Card,
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  DatePicker,
  Avatar,
  Upload,
} from "antd";
import { profileUser, updateProfile } from "../../../Service/User/userService";

const { TextArea } = Input;
const { Option } = Select;

function ProfileUser() {
  const [profile, setProfile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const data = await profileUser();

        const userInfo = data.info;
        if (userInfo && userInfo.birthDate) {
          const parsedBirthDate = dayjs(userInfo.birthDate);
          userInfo.birthDate = parsedBirthDate.isValid()
            ? parsedBirthDate
            : null;
        }
        setProfile(userInfo);
        form.setFieldsValue(userInfo);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
      }
    };
    fetchAPI();
  }, [form]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleFinish = async (values) => {
    if (values && values.birthDate) {
      const parsed = dayjs(values.birthDate);
      values.birthDate = parsed.isValid() ? parsed.toISOString() : null;
    }

    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      if (val !== undefined && val !== null) formData.append(key, val);
    });
    if (avatarFile) formData.append("avatarUrl", avatarFile);

    try {
      await updateProfile(formData);
      const refreshed = await profileUser();
      const userInfo = refreshed.info;
      if (userInfo && userInfo.birthDate) {
        const parsed = dayjs(userInfo.birthDate);
        userInfo.birthDate = parsed.isValid() ? parsed : null;
      }
      setProfile(userInfo);
      form.setFieldsValue(userInfo);
      setIsEdit(false);
      setAvatarFile(null);
      setAvatarPreview("");
    } catch (err) {
      console.error("Cập nhật thất bại:", err);
    }
  };

  const handleCancle = () => {
    setIsEdit(false);
    form.resetFields(); // Reset lại form về giá trị ban đầu
  };

  return (
    <>
      {profile && (
        <Card
          title="Thông tin người dùng"
          extra={
            !isEdit && (
              <Button type="primary" onClick={handleEdit}>
                Chỉnh sửa
              </Button>
            )
          }
        >
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            {isEdit ? (
              <Upload
                beforeUpload={(file) => {
                  setAvatarFile(file);
                  setAvatarPreview(URL.createObjectURL(file));
                  return false;
                }}
                onRemove={() => {
                  setAvatarFile(null);
                  setAvatarPreview("");
                }}
                maxCount={1}
                accept="image/jpeg,image/png,image/webp"
                showUploadList={false}
              >
                <div style={{ display: "inline-block", cursor: "pointer" }}>
                  <Avatar
                    size={100}
                    src={avatarPreview || profile.avatarUrl}
                    style={{ marginBottom: 8 }}
                  />
                  <div>
                    <Button size="small">Chọn ảnh</Button>
                  </div>
                </div>
              </Upload>
            ) : (
              <Avatar
                size={100}
                src={profile.avatarUrl}
                style={{ marginBottom: 12 }}
              />
            )}
            <p style={{ color: "#888" }}>{profile.email}</p>
          </div>

          <Form
            layout="vertical"
            form={form}
            onFinish={handleFinish}
            disabled={!isEdit}
            initialValues={profile}
          >
            <Form.Item label="Họ và tên" name="fullName">
              <Input placeholder="Nhập họ tên" />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input placeholder="Nhập email" disabled />
            </Form.Item>

            <Form.Item label="Số điện thoại" name="phoneNumber">
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item label="Giới tính" name="gender">
              <Select placeholder="Chọn giới tính">
                <Option value="MALE">Nam</Option>
                <Option value="FEMALE">Nữ</Option>
                <Option value="OTHER">Khác</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Ngày sinh" name="birthDate">
              <DatePicker
                format="DD/MM/YYYY"
                style={{ width: "100%" }}
                placeholder="Chọn ngày sinh"
              />
            </Form.Item>

            <Form.Item label="Địa chỉ" name="address">
              <Input placeholder="Nhập địa chỉ" />
            </Form.Item>

            {isEdit && (
              <Form.Item style={{ textAlign: "right" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: 10 }}
                >
                  Cập nhật
                </Button>
                <Button onClick={handleCancle}>Hủy</Button>
              </Form.Item>
            )}
          </Form>
        </Card>
      )}
    </>
  );
}

export default ProfileUser;
