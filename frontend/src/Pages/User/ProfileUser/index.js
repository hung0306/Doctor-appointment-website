import { useEffect, useState } from "react";
import "./ProfileUser.scss";
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
  message,
  Spin,
} from "antd";
import { profileUser, updateProfile } from "../../../Service/User/userService";

const { TextArea } = Input;
const { Option } = Select;

function ProfileUser() {
  const [profile, setProfile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

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

      // Hiển thị message thành công
      message.success("Cập nhật thông tin thành công!");
    } catch (err) {
      console.error("Cập nhật thất bại:", err);
      // Hiển thị message lỗi
      message.error("Cập nhật thất bại. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancle = () => {
    setIsEdit(false);
    form.resetFields(); // Reset lại form về giá trị ban đầu
  };

  return (
    <div className="profile-user-page">
      {profile && (
        <Card
          title="Thông tin người dùng"
          extra={
            !isEdit && (
              <Button type="primary" onClick={handleEdit} disabled={loading}>
                Chỉnh sửa
              </Button>
            )
          }
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <div className="profile-container">
            {/* Left side - Avatar */}
            <div className="avatar-section">
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
                  <div className="avatar-upload">
                    <Avatar
                      src={avatarPreview || profile.avatarUrl}
                      className="profile-avatar"
                    />
                    <div className="upload-overlay">
                      <Button size="small" type="primary">
                        Chọn ảnh
                      </Button>
                    </div>
                  </div>
                </Upload>
              ) : (
                <div className="avatar-display">
                  <Avatar src={profile.avatarUrl} className="profile-avatar" />
                </div>
              )}
            </div>

            {/* Right side - User Information */}
            <div className="info-section">
              <Form
                layout="vertical"
                form={form}
                onFinish={handleFinish}
                disabled={!isEdit || loading}
                initialValues={profile}
                className="profile-form"
              >
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Họ và tên" name="fullName">
                      <Input placeholder="Nhập họ tên" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Email" name="email">
                      <Input placeholder="Nhập email" disabled />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Số điện thoại" name="phoneNumber">
                      <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Giới tính" name="gender">
                      <Select placeholder="Chọn giới tính">
                        <Option value="MALE">Nam</Option>
                        <Option value="FEMALE">Nữ</Option>
                        <Option value="OTHER">Khác</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Ngày sinh" name="birthDate">
                      <DatePicker
                        format="DD/MM/YYYY"
                        style={{ width: "100%" }}
                        placeholder="Chọn ngày sinh"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Địa chỉ" name="address">
                      <Input placeholder="Nhập địa chỉ" />
                    </Form.Item>
                  </Col>
                </Row>

                {isEdit && (
                  <Form.Item className="form-actions">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={loading}
                      disabled={loading}
                    >
                      {loading ? "Đang cập nhật..." : "Cập nhật"}
                    </Button>
                    <Button
                      onClick={handleCancle}
                      size="large"
                      disabled={loading}
                    >
                      Hủy
                    </Button>
                  </Form.Item>
                )}
              </Form>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default ProfileUser;
