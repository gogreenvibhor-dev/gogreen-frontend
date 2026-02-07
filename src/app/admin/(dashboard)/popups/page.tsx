
import HomePopupManager from "@/components/admin/HomePopupManager";
import PageHeader from "@/components/PageHeader";

export default function AdminPopupsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900">Home Popups</h1>
        <p className="text-gray-600">Manage popups displayed on the home page.</p>
      </div>
      
      <HomePopupManager />
    </div>
  );
}
