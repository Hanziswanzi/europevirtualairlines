import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, PlaneTakeoff, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white p-6 font-sans">
      <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center tracking-wide">🌍 Europe Virtual Airlines</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-blue-200">Totaal Uren</h2>
              <p className="text-4xl font-bold">58</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-blue-200">Rang</h2>
              <p className="text-4xl font-bold">First Officer</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-blue-200">Aankomende Event</h2>
              <p className="text-lg font-medium">EHAM Fly-In</p>
              <p className="text-sm text-blue-100">12 april, 18:00z</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-blue-200">Actieve Vluchten</h2>
              <p className="text-4xl font-bold">4</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-blue-100">📋 Beschikbare Vluchten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: 1, from: "EHAM", to: "LOWW", flight: "KL1832", time: "10:00z" },
            { id: 2, from: "EHAM", to: "LGAV", flight: "HV6354", time: "12:15z" },
            { id: 3, from: "EHAM", to: "LIRF", flight: "OR2030", time: "14:00z" },
          ].map((flight) => (
            <Card key={flight.id}>
              <CardContent className="p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <PlaneTakeoff className="w-5 h-5 text-blue-200" />
                    <span className="font-semibold text-blue-100">{flight.flight}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-100">{flight.time}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white">{flight.from} → {flight.to}</span>
                </div>
                <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">Start Dispatch</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
