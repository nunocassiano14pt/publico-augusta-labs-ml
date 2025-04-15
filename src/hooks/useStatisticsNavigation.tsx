
import { useState } from 'react';

export function useStatisticsNavigation() {
  const [selectedMediaGroup, setSelectedMediaGroup] = useState<string | null>(null);
  const [selectedPublisher, setSelectedPublisher] = useState<string | null>(null);
  const [selectedPublicationType, setSelectedPublicationType] = useState<string | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<string | null>(null);
  const [selectedSubscriptionPeriod, setSelectedSubscriptionPeriod] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleMediaGroupClick = (mediaGroupId: string) => {
    setSelectedMediaGroup(mediaGroupId);
    setSelectedPublisher(null);
    setSelectedPublicationType(null);
    setSelectedPublication(null);
    setSelectedSubscriptionPeriod(null);
    setSelectedCategory(null);
  };
  
  const handlePublisherClick = (publisherId: string) => {
    setSelectedPublisher(publisherId);
    setSelectedPublicationType(null);
    setSelectedPublication(null);
    setSelectedSubscriptionPeriod(null);
    setSelectedCategory(null);
  };
  
  const handlePublicationTypeClick = (publicationType: string) => {
    setSelectedPublicationType(publicationType);
    setSelectedPublication(null);
    setSelectedSubscriptionPeriod(null);
    setSelectedCategory(null);
  };
  
  const handlePublicationClick = (publicationId: string) => {
    setSelectedPublication(publicationId);
    setSelectedSubscriptionPeriod(null);
    setSelectedCategory(null);
  };
  
  const handleSubscriptionPeriodClick = (period: number) => {
    setSelectedSubscriptionPeriod(period);
    setSelectedCategory(null);
  };
  
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };
  
  const handleBackClick = () => {
    // Determine which level to go back to
    if (selectedCategory) {
      setSelectedCategory(null);
    } else if (selectedSubscriptionPeriod) {
      setSelectedSubscriptionPeriod(null);
    } else if (selectedPublication) {
      setSelectedPublication(null);
    } else if (selectedPublicationType) {
      setSelectedPublicationType(null);
    } else if (selectedPublisher) {
      setSelectedPublisher(null);
    } else if (selectedMediaGroup) {
      setSelectedMediaGroup(null);
    }
  };

  return {
    selectedMediaGroup,
    selectedPublisher,
    selectedPublicationType,
    selectedPublication,
    selectedSubscriptionPeriod,
    selectedCategory,
    handleMediaGroupClick,
    handlePublisherClick,
    handlePublicationTypeClick,
    handlePublicationClick,
    handleSubscriptionPeriodClick,
    handleCategoryClick,
    handleBackClick,
    
    // Compatibilidade com os nomes antigos para reutilização dos componentes existentes
    selectedInstitution: selectedMediaGroup,
    selectedSchool: selectedPublisher,
    selectedCourseType: selectedPublicationType,
    selectedCourse: selectedPublication,
    selectedAcademicYear: selectedSubscriptionPeriod,
    selectedUnit: selectedCategory,
    handleInstitutionClick: handleMediaGroupClick,
    handleSchoolClick: handlePublisherClick,
    handleCourseTypeClick: handlePublicationTypeClick,
    handleCourseClick: handlePublicationClick,
    handleAcademicYearClick: handleSubscriptionPeriodClick,
    handleUnitClick: handleCategoryClick
  };
}
