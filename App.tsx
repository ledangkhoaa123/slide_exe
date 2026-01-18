import React, { useState, useEffect, useRef } from 'react';
import { HeroSlide } from './components/HeroSlide';
import { ProfileSlide } from './components/ProfileSlide';
import { CoreValueSlide } from './components/CoreValueSlide';
import { ClosingSlide } from './components/ClosingSlide';
import { NavigationDots } from './components/NavigationDots';
import { Boxes, Palette, HeartHandshake } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Detect current slide index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const slideHeight = window.innerHeight;
        const index = Math.round(scrollPosition / slideHeight);
        setCurrentSlide(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFFDF5]">
      <NavigationDots currentSlide={currentSlide} totalSlides={6} />

      {/* Main Scroll Container */}
      <div 
        ref={containerRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {/* Slide 1 */}
        <HeroSlide />

        {/* Slide 2 */}
        <ProfileSlide />

        {/* Slide 3 - Core Value 1 (Uses Wireframe Cake) */}
        <CoreValueSlide 
          id={1}
          label="GIÁ TRỊ CỐT LÕI #1"
          headline="Digital-to-Physical Integrity"
          subHeadline="Sự Toàn Vẹn Từ Kỹ Thuật Số Đến Vật Lý"
          challenge="Đảm bảo hàng trăm cửa hàng sản xuất đúng 100% theo bản vẽ 3D là bài toán khó về chuẩn hóa."
          solution="LAYERZ thiết lập 'Giao thức hiển thị chuẩn'. Hệ thống chuyển đổi thiết kế thành thông số kỹ thuật chính xác."
          keyPhrase="Không bán ảnh minh họa - Bán sự chính xác."
          Icon={Boxes}
        />

        {/* Slide 4 - Core Value 2 (Uses Palette) */}
        <CoreValueSlide 
          id={2}
          label="GIÁ TRỊ CỐT LÕI #2"
          headline="Curated Creativity System"
          subHeadline="Hệ Thống Quản Trị Sáng Tạo"
          challenge="Tự do sáng tạo dễ dẫn đến rủi ro thẩm mỹ (User-generated Chaos)."
          solution="Cung cấp 'Khung năng lực thẩm mỹ' (Aesthetic Framework). AI đóng vai trò Mentor gợi ý phối màu, bố cục."
          keyPhrase="Tự do trong khuôn khổ của cái Đẹp."
          Icon={Palette}
        />

        {/* Slide 5 - Core Value 3 (Uses Handshake) */}
        <CoreValueSlide 
          id={3}
          label="GIÁ TRỊ CỐT LÕI #3"
          headline="Local Artisan Empowerment"
          subHeadline="Trao Quyền Cho Nghệ Nhân Địa Phương"
          challenge="Tiệm bánh nhỏ có tay nghề nhưng thiếu tư duy Marketing và Công nghệ."
          solution="Chúng tôi lo hạ tầng 3D, Marketing & Data. SMEs chỉ cần tập trung vào tay nghề thủ công."
          keyPhrase="Công nghệ vị nhân sinh (Tech for People)."
          Icon={HeartHandshake}
        />

        {/* Slide 6 */}
        <ClosingSlide />
      </div>
    </div>
  );
};

export default App;
