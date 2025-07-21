import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

/**
 * Demo component to test smooth scrolling functionality
 * This can be added temporarily to test the scroll behavior
 */
const ScrollDemo = () => {
  const { scrollTo } = useSmoothScroll();

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Card className="fixed bottom-4 right-4 z-40 w-64">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">Scroll Navigation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => scrollTo(section.id)}
          >
            {section.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default ScrollDemo;
