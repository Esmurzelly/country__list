import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { searchByCountry } from '../config';
import Button from "@/components/Button";
import Info from "@/components/Info";
import { Country } from "@/models/models";


const Details = () => {
  let nameParams = useParams();
  let name: any = nameParams.name
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country[]>();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(
      ({data}) => setCountry(data[0])
    )
  }, [name]);

  return (
    <div 
      className="px-8 min-h-screen bg-[#fafafa] dark:bg-secondary_dark"
    >
      <Button>
        <div 
          className="flex items-center gap-2 px-4 py-1.5"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </div>
      </Button>
        {country && (
          <Info name={""} nativeName={""} population={0} region={""} subregion={""} capital={""} borders={[]} topLevelDomain={[]} currencies={[]} languages={[]} flag={""} navigate={navigate} {...country} />
        )}
        
      
    </div>
  )
}

export default Details